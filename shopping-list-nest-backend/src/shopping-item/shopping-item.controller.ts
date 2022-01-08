import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppingItemService } from './shopping-item.service';
import { CreateShoppingItemDto } from './dto/create-shopping-item.dto';
import { UpdateShoppingItemDto } from './dto/update-shopping-item.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Items')
@Controller('items')
export class ShoppingItemController
{
  constructor(private readonly shoppingItemService: ShoppingItemService) { }

  @Post()
  async create(@Body() createShoppingItemDto: CreateShoppingItemDto)
  {
    return await this.shoppingItemService.create(createShoppingItemDto);
  }

  @Get()
  async findAll()
  {
    return await this.shoppingItemService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string)
  {
    return await this.shoppingItemService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateShoppingItemDto: UpdateShoppingItemDto)
  {
    return await this.shoppingItemService.update(+id, updateShoppingItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string)
  {
    return await this.shoppingItemService.remove(+id);
  }
}