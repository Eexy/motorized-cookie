import postgres from 'postgres';
import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';

export const DB = Symbol('DB');
export type DbType = PostgresJsDatabase;

export const databaseProvider: FactoryProvider = {
  provide: DB,
  useFactory: (configService: ConfigService) => {
    const dbUrl = configService.get<string>('DB_URL');
    const queryClient = postgres(dbUrl ?? '');

    return drizzle(queryClient);
  },
  inject: [ConfigService],
};
