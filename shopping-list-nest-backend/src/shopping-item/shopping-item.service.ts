import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, getConnection, QueryRunner, Repository } from 'typeorm';
import { CreateShoppingItemDto } from './dto/create-shopping-item.dto';
import { UpdateShoppingItemDto } from './dto/update-shopping-item.dto';
import { ShoppingItem } from './entities/shopping-item.entity';

@Injectable()
export class ShoppingItemService
{
  private readonly logger = new Logger(ShoppingItemService.name);
  constructor
    (
      private readonly connection: Connection,
      @InjectRepository(ShoppingItem) private readonly shoppingItem: Repository<ShoppingItem>
    ) { }

  async create(createShoppingItemDto: CreateShoppingItemDto): Promise<ShoppingItem>
  {
    return await this.addToDB(createShoppingItemDto, (await this.connectQueryDb()));
  }

  async findAll(): Promise<ShoppingItem[]>
  {
    return await this.shoppingItem.find();
  }

  async findOne(id: number): Promise<ShoppingItem>
  {
    return await this.shoppingItem.findOne(id);
  }

  async update(id: number, updateShoppingItemDto: UpdateShoppingItemDto): Promise<ShoppingItem>
  {
    const item = await this.findOne(id);
    item.id = id;
    if (updateShoppingItemDto.name)
      item.name = updateShoppingItemDto.name;
    if (updateShoppingItemDto.quantity)
      item.quantity = updateShoppingItemDto.quantity;
    if (updateShoppingItemDto.creationDate)
      item.creationDate = updateShoppingItemDto.creationDate;
    if (updateShoppingItemDto.shoppingDone)
      item.shoppingDone = updateShoppingItemDto.shoppingDone;

    await getConnection()
      .createQueryBuilder()
      .update(ShoppingItem)
      .set({ name: item.name, quantity: item.quantity, creationDate: item.creationDate, shoppingDone: item.shoppingDone })
      .where("id = :id", { id: item.id })
      .execute();
    return item;
  }

  async remove(id: number): Promise<any>
  {
    return await this.shoppingItem.delete(id);
  }

  async addToDB(createShoppingItemDto: CreateShoppingItemDto, queryRunner: QueryRunner): Promise<ShoppingItem>
  {
    const item = new ShoppingItem();
    item.name = createShoppingItemDto.name;
    item.quantity = createShoppingItemDto.quantity
    if (createShoppingItemDto.creationDate == undefined)
      item.creationDate = new Date(Date.now());
    else
      item.creationDate = createShoppingItemDto.creationDate;
    item.shoppingDone = createShoppingItemDto.shoppingDone;
    try
    {
      await this.connection.transaction(async manager =>
      {
        await manager.save(item);
      });
      // await queryRunner.manager.save(item);
      await queryRunner.commitTransaction();
    } catch (err)
    {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally
    {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
    return item;
  }

  async connectQueryDb(): Promise<QueryRunner>
  {
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    return queryRunner;
  }
}