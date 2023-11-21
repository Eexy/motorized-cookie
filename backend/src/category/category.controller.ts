import { Controller, Get, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import {
  CategoryQueryDto,
  categoryQueryDtoSchema,
} from './dto/category-query.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(
    @Query(new ZodValidationPipe(categoryQueryDtoSchema))
    query: CategoryQueryDto,
  ) {
    return await this.categoryService.findAll(query);
  }
}
