import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { Client } from '../common/decorators/client.decorator';

@Controller('clients')
export class ClientsController {
  @Get()
  @UseGuards(AuthGuard)
  getCurrentClient(@Client() client: unknown) {
    return client;
  }
}
