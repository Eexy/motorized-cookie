import * as argon2 from 'argon2';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { SignupDto } from './dto/signupDto';
import { SigninDto } from './dto/signin.dto';
import { JwtService } from '../jwt/jwt.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly clientsService: ClientsService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto) {
    const hashedPassword = await argon2.hash(signupDto.password);
    const client = await this.clientsService.createUser({
      ...signupDto,
      password: hashedPassword,
    });
    return this.jwtService.generateJwt({
      sub: client[0].id,
      email: client[0].email,
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

    return this.jwtService.generateJwt({
      sub: client.id,
      email: client.email,
    });
  }
}
