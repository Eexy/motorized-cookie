import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { Client } from '../common/decorators/client.decorator';
import { excludePassword } from './lib/exclude-password';
import { IClient } from './types/client';
import { ApiResponse } from '@nestjs/swagger';

@Controller('clients')
export class ClientsController {
  @Get('me')
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, description: 'Return logged client' })
  @ApiResponse({ status: 401, description: 'Client is not connected' })
  getCurrentClient(@Client() client: IClient) {
    return excludePassword(client);
  }
}
