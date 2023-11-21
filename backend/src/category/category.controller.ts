import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
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

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const category = await this.categoryService.findById(id);

    if (!category) {
      throw new NotFoundException(`Unable to find category with id ${id}`);
    }

    return category;
  }
}
