import { Injectable } from '@nestjs/common';
import { ClientsService } from '../clients/clients.service';
import { CreateClientDto } from '../clients/dto/create-client.dto';

@Injectable()
export class AuthService {
  constructor(private readonly clientsService: ClientsService) {}

  async signup(createClientDto: CreateClientDto) {
    return await this.clientsService.createUser(createClientDto);
  }
}
