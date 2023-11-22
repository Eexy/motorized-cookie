import { Inject, Injectable } from '@nestjs/common';
import { DB, DbType } from '../database/database.provider';
import { clients } from '../database/schema';
import { SignupDto } from '../auth/dto/signupDto';
import { eq } from 'drizzle-orm';

@Injectable()
export class ClientsService {
  constructor(@Inject(DB) private readonly db: DbType) {}

  async createUser(newClient: SignupDto) {
    return this.db.insert(clients).values(newClient).returning();
  }

  async getClientByEmail(email: string) {
    const client = await this.db.query.clients.findFirst({
      where: eq(clients.email, email),
      columns: {
        password: false,
      },
    });

    if (!client) return null;

    return client;
  }

  async getClientById(id: number) {
    const client = await this.db.query.clients.findFirst({
      where: eq(clients.id, id),
      columns: {
        password: false,
      },
    });

    if (client) return null;

    return client;
  }
}
