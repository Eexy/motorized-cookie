import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtService {
  constructor(private readonly configService: ConfigService) {}

  generateJwt(payload: Record<string, unknown>) {
    const tokenSecret = this.configService.get<string>('JWT_SECRET');
    return jwt.sign(payload, tokenSecret ?? '', { expiresIn: '15m' });
  }

  decodeJwt(token: string) {
    const tokenSecret = this.configService.get<string>('JWT_SECRET');
    return jwt.verify(token, tokenSecret ?? '');
  }
}
