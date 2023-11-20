import { Inject, Injectable } from '@nestjs/common';
import { DB, DbType } from '../database/database.provider';
import { CreateClientDto } from './dto/create-client.dto';
import { clients } from '../database/schema';

@Injectable()
export class ClientsService {
  constructor(@Inject(DB) private readonly db: DbType) {}

  async createUser(newClient: CreateClientDto) {
    return this.db.insert(clients).values(newClient).returning();
  }
}
