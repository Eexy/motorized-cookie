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
    const res = await this.db
      .select()
      .from(clients)
      .where(eq(clients.email, email))
      .limit(1);

    if (!res.length) return null;

    return res[0];
  }

  async getClientById(id: number) {
    const res = await this.db
      .select()
      .from(clients)
      .where(eq(clients.id, id))
      .limit(1);

    if (!res.length) return null;

    return res[0];
  }
}
