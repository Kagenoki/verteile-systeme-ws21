import { Injectable, Logger } from '@nestjs/common';
import { Connection, QueryRunner } from 'typeorm';
import { CreateShoppingItemDto } from './dto/create-shopping-item.dto';
import { UpdateShoppingItemDto } from './dto/update-shopping-item.dto';

@Injectable()
export class ShoppingItemService
{
  private readonly logger = new Logger(ShoppingItemService.name);
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

  async addToDB(createShoppingItemDto: CreateShoppingItemDto, queryRunner: QueryRunner): Promise<any>
  {
    try
    {
      // createCsvDto.forEach(async (singleCreateCsvDto) =>
      // {
      await this.connection.transaction(async manager =>
      {
        // await manager.save();
      });
      // await queryRunner.manager.save(finCsv);
      await queryRunner.commitTransaction();
      // });
    } catch (err)
    {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally
    {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
    return null;
  }

  async connectQueryDb(): Promise<QueryRunner>
  {
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    return queryRunner;
  }

}
