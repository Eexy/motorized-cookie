import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { SignupDto, signupDtoSchema } from './dto/signupDto';
import { SigninDto, signinDtoSchema } from './dto/signin.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @HttpCode(201)
  @ApiResponse({
    status: 201,
    description:
      'Client has been created and return access token valid for 15min',
  })
  @ApiBody({
    required: true,
    examples: {
      signup: {
        value: {
          email: 'test@gmail.com',
          password: 'password',
          gender: 'M',
          firstName: 'John',
          lastName: 'Doe',
        },
      },
    },
  })
  async signup(
    @Body(new ZodValidationPipe(signupDtoSchema))
    signupDto: SignupDto,
  ) {
    const token = await this.authService.signup(signupDto);
    return { token };
  }

  @Post('signin')
  @ApiResponse({ status: 200, description: 'Return access header' })
  @ApiResponse({ status: 401, description: 'Invalid password or email' })
  @ApiBody({
    required: true,
    examples: {
      signin: {
        value: {
          email: 'test@gmail.com',
          password: 'password',
        },
      },
    },
  })
  async signin(
    @Body(new ZodValidationPipe(signinDtoSchema)) signinDto: SigninDto,
  ) {
    const token = await this.authService.signin(signinDto);
    return { token };
  }
}
