import { Body, Controller, Post } from '@nestjs/common';
import {
  CreateClientDto,
  createClientDtoSchema,
} from '../clients/dto/create-client.dto';
import { AuthService } from './auth.service';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body(new ZodValidationPipe(createClientDtoSchema))
    createClientDto: CreateClientDto,
  ) {
    return await this.authService.signup(createClientDto);
  }
}
