import postgres from 'postgres';
import * as schema from './schema';
import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { seedDatabase } from './seed';
import { clearDb } from './clear-db';

export const DB = Symbol('DB');
export type DbType = PostgresJsDatabase<typeof schema>;

export const databaseProvider: FactoryProvider = {
  provide: DB,
  useFactory: async (configService: ConfigService) => {
    const dbUrl = configService.get<string>('DB_URL');
    const migrationClient = postgres(dbUrl ?? '', { max: 1 });
    await migrate(drizzle(migrationClient), {
      migrationsFolder: 'migrations',
    });
    const queryClient = postgres(dbUrl ?? '');

    const db = drizzle(queryClient, {
      schema,
    });

    await clearDb(db);
    await seedDatabase(db);

    return db;
  },
  inject: [ConfigService],
};
