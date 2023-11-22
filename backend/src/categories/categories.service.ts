import { Inject, Injectable } from '@nestjs/common';
import { DB, DbType } from '../database/database.provider';
import { CategoryQueryDto } from './dto/category-query.dto';
import { categories } from '../database/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class CategoriesService {
  constructor(@Inject(DB) private readonly db: DbType) {}

  async findAll(query: CategoryQueryDto) {
    return await this.db.query.categories.findMany({
      limit: query.limit,
      offset: (query.page - 1) * 25,
    });
  }

  async findById(id: number) {
    return this.db.query.categories.findFirst({
      where: eq(categories.id, id),
    });
  }
}
