import { Inject, Injectable } from '@nestjs/common';
import { DB, DbType } from '../database/database.provider';
import { clients } from '../database/schema';
import { SignupDto } from '../auth/dto/signupDto';

@Injectable()
export class ClientsService {
  constructor(@Inject(DB) private readonly db: DbType) {}

  async createUser(newClient: SignupDto) {
    return this.db.insert(clients).values(newClient).returning();
  }
}
