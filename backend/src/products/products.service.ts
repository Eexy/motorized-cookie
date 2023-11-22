import { Inject, Injectable } from '@nestjs/common';
import { DB, DbType } from '../database/database.provider';
import { eq } from 'drizzle-orm';
import { products } from '../database/schema';

@Injectable()
export class ProductsService {
  constructor(@Inject(DB) private readonly db: DbType) {}

  async findById(id: number) {
    return await this.db.query.products.findFirst({
      where: eq(products.id, id),
      with: {
        category: true,
      },
    });
  }
}
