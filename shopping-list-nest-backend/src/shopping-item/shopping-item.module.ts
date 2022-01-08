import { Module } from '@nestjs/common';
import { ShoppingItemService } from './shopping-item.service';
import { ShoppingItemController } from './shopping-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingItem } from './entities/shopping-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingItem])],
  controllers: [ShoppingItemController],
  providers: [TypeOrmModule, ShoppingItemService]
})
export class ShoppingItemModule { }
