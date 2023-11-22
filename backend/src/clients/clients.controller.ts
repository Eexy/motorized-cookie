import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { Client } from '../common/decorators/client.decorator';
import { excludePassword } from './lib/exclude-password';
import { IClient } from './types/client';

@Controller('clients')
export class ClientsController {
  @Get()
  @UseGuards(AuthGuard)
  getCurrentClient(@Client() client: IClient) {
    return excludePassword(client);
  }
}
