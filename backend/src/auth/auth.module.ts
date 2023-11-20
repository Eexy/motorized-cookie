import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ClientsModule } from '../clients/clients.module';
import { AuthService } from './auth.service';
import { JwtModule } from '../jwt/jwt.module';

@Module({
  controllers: [AuthController],
  imports: [ClientsModule, JwtModule],
  providers: [AuthService],
})
export class AuthModule {}
