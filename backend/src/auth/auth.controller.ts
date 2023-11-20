import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { SignupDto, signupDtoSchema } from './dto/signupDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body(new ZodValidationPipe(signupDtoSchema))
    createClientDto: SignupDto,
  ) {
    return await this.authService.signup(createClientDto);
  }
}
