import { Inject, Injectable } from '@nestjs/common';
import { DB, DbType } from '../database/database.provider';
import { CategoryQueryDto } from './dto/category-query.dto';
import { categories } from '../database/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class CategoryService {
  constructor(@Inject(DB) private readonly db: DbType) {}

  async findAll(query: CategoryQueryDto) {
    return this.db
      .select()
      .from(categories)
      .limit(query.limit)
      .offset((query.page - 1) * 25);
  }

  async findById(id: number) {
    return this.db.query.categories.findFirst({
      where: eq(categories.id, id),
    });
  }
}
