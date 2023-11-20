import * as argon2 from 'argon2';
import { Injectable } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { SignupDto } from './dto/signupDto';

@Injectable()
export class AuthService {
  constructor(private readonly clientsService: ClientsService) {}

  async signup(signupDto: SignupDto) {
    const hashedPassword = await argon2.hash(signupDto.password);
    return await this.clientsService.createUser({
      ...signupDto,
      password: hashedPassword,
    });
  }
}
