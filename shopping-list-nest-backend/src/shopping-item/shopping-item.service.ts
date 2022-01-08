import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CreateShoppingItemDto } from './dto/create-shopping-item.dto';
import { UpdateShoppingItemDto } from './dto/update-shopping-item.dto';

@Injectable()
export class ShoppingItemService
{
  constructor
    (
      private readonly connection: Connection,
    // @InjectRepository(transactionalbookingdata) private readonly _transactionalbookingdata: Repository<transactionalbookingdata>
  ) { }

  create(createShoppingItemDto: CreateShoppingItemDto)
  {

    return 'This action adds a new shoppingItem';
  }

  findAll()
  {
    return `This action returns all shoppingItem`;
  }

  findOne(id: number)
  {
    return `This action returns a #${id} shoppingItem`;
  }

  update(id: number, updateShoppingItemDto: UpdateShoppingItemDto)
  {
    return `This action updates a #${id} shoppingItem`;
  }

  remove(id: number)
  {
    return `This action removes a #${id} shoppingItem`;
  }
}
