import { DbType } from './database.provider';
import { sql } from 'drizzle-orm';

export async function clearDb(db: DbType) {
  const tables = ['categories', 'products', 'clients'];
  for (const table of tables) {
    await db.execute(sql.raw(`TRUNCATE ${table} RESTART IDENTITY CASCADE`));
  }
}
