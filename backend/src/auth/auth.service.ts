import * as argon2 from 'argon2';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { SignupDto } from './dto/signupDto';
import { SigninDto } from './dto/signin.dto';

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

  async signin(signinDto: SigninDto) {
    const client = await this.clientsService.getClientByEmail(signinDto.email);

    if (!client) {
      throw new NotFoundException('Unable to find client');
    }

    const isPasswordMatch = await argon2.verify(
      client.password,
      signinDto.password,
    );

    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid password');
    }

    return true;
  }
}
