import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ClientsModule } from '../clients/clients.module';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  imports: [ClientsModule],
  providers: [AuthService],
})
export class AuthModule {}
