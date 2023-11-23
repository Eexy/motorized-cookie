import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import {
  QueryProductsDto,
  queryProductsDtoSchema,
} from './dto/query-products.dto';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Return product' })
  @ApiResponse({ status: 404, description: 'Unable to find product' })
  async findById(@Param('id', ParseIntPipe) id: number) {
    const product = await this.productService.findById(id);

    if (!product) {
      throw new NotFoundException(`Unable to found product with id ${id}`);
    }

    return product;
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Return queried products' })
  @ApiQuery({
    name: 'limit',
    required: false,
    description:
      'Set the maximum number of products queried (default: 25, max: 25)',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Set the desired page (default: 1)',
  })
  @ApiQuery({
    name: 'category',
    required: false,
    description: 'Set the desired category',
  })
  async findAll(
    @Query(new ZodValidationPipe(queryProductsDtoSchema))
    query: QueryProductsDto,
  ) {
    return this.productService.findAll(query);
  }
}
