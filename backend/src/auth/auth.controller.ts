import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { SignupDto, signupDtoSchema } from './dto/signupDto';
import { SigninDto, signinDtoSchema } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body(new ZodValidationPipe(signupDtoSchema))
    signupDto: SignupDto,
  ) {
    return await this.authService.signup(signupDto);
  }

  @Post('signin')
  async signin(
    @Body(new ZodValidationPipe(signinDtoSchema)) signinDto: SigninDto,
  ) {
    return await this.authService.signin(signinDto);
  }
}
