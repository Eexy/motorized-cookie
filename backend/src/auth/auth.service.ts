import { Injectable } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { SignupDto } from './dto/signupDto';

@Injectable()
export class AuthService {
  constructor(private readonly clientsService: ClientsService) {}

  async signup(signupDto: SignupDto) {
    return await this.clientsService.createUser(signupDto);
  }
}
