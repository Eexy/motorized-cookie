import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ClientsModule } from '../clients/clients.module';
import { AuthService } from './auth.service';
import { MailModule } from '../mail/mail.module';

@Module({
  controllers: [AuthController],
  imports: [ClientsModule, MailModule],
  providers: [AuthService],
})
export class AuthModule {}
