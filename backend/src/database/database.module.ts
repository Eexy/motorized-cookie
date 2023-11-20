import { Global, Module } from '@nestjs/common';
import { databaseProvider, DB } from './database.provider';

@Global()
@Module({
  providers: [databaseProvider],
  exports: [databaseProvider, DB],
})
export class DatabaseModule {}
