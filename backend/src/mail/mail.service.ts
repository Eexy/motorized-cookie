import nodemailer from 'nodemailer';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { hostSchema } from './types/host';

@Injectable()
export class MailService {
  private readonly logger = new Logger('MAIL');

  constructor(private readonly configService: ConfigService) {}

  async sendEmail(email: string, object: string, html: string) {
    const rawHost = this.getHost();
    const parsedHost = hostSchema.safeParse(rawHost);

    if (!parsedHost.success) {
      return this.logger.error('Invalid host. Unable to send email');
    }

    const transporter = nodemailer.createTransport({
      host: parsedHost.data.host,
      port: parsedHost.data.port,
      secure: true,
      auth: {
        user: parsedHost.data.user,
        pass: parsedHost.data.password,
      },
    });

    await transporter.sendMail({
      from: 'test',
      to: email,
      subject: object,
      html,
    });

    this.logger.log(`Mail sent to ${email}`);
  }

  private getHost() {
    const host = this.configService.get<string>('MAIL_HOST');
    const port = this.configService.get<number>('MAIL_PORT');
    const user = this.configService.get<string>('MAIL_USER');
    const password = this.configService.get<string>('MAIL_PASSWORD');

    return { host, port, user, password };
  }
}
