import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';

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
}
