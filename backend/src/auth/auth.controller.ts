import { Body, Controller, Post } from '@nestjs/common';
import { CreateClientDto } from '../clients/dto/create-client.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() createClientDto: CreateClientDto) {
    console.log(createClientDto);
    return await this.authService.signup({
      email: 'test',
      firstName: 'firstname',
      lastName: 'lastname',
      gender: 'M',
      password: 'password',
    });
  }
}
