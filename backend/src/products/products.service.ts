import { Inject, Injectable } from '@nestjs/common';
import { DB, DbType } from '../database/database.provider';
import { eq } from 'drizzle-orm';
import { categories, products } from '../database/schema';
import { QueryProductsDto } from './dto/query-products.dto';

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

  async findAll(query: QueryProductsDto) {
    if (query.category) {
      const sq = this.db
        .select({ id: categories.id, name: categories.name })
        .from(categories)
        .where(eq(categories.name, query.category))
        .limit(1)
        .as('sq');
      return this.db
        .select({
          id: products.id,
          name: products.name,
          price: products.price,
          createdAt: products.createdAt,
          description: products.description,
          categoryId: sq.id,
        })
        .from(products)
        .innerJoin(sq, eq(products.categoryId, sq.id))
        .limit(query.limit)
        .offset((query.page - 1) * 25);
    }

    return await this.db.query.products.findMany({
      offset: (query.page - 1) * 25,
      limit: query.limit,
    });
  }
}
