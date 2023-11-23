import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import {
  CategoryQueryDto,
  categoryQueryDtoSchema,
} from './dto/category-query.dto';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Return queried categories' })
  @ApiQuery({
    name: 'limit',
    description:
      'Set the maximum size of categories retrieved (default: 25, max: 25)',
    required: false,
  })
  @ApiQuery({
    name: 'page',
    description: 'Set desired page for categories (default: 1)',
    required: false,
  })
  async findAll(
    @Query(new ZodValidationPipe(categoryQueryDtoSchema))
    query: CategoryQueryDto,
  ) {
    return await this.categoryService.findAll(query);
  }

  @Get(':id')
  @ApiResponse({ status: 404, description: 'Unable to find category' })
  @ApiResponse({ status: 200, description: 'Return category' })
  async findById(@Param('id', ParseIntPipe) id: number) {
    const category = await this.categoryService.findById(id);

    if (!category) {
      throw new NotFoundException(`Unable to find category with id ${id}`);
    }

    return category;
  }
}
