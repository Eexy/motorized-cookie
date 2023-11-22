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

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    const product = await this.productService.findById(id);

    if (!product) {
      throw new NotFoundException(`Unable to found product with id ${id}`);
    }

    return product;
  }

  @Get()
  async findAll(
    @Query(new ZodValidationPipe(queryProductsDtoSchema))
    query: QueryProductsDto,
  ) {
    return this.productService.findAll(query);
  }
}
