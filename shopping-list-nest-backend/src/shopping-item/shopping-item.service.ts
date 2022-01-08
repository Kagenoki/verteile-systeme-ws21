import { Injectable, Logger } from '@nestjs/common';
import { Connection, getConnection, QueryRunner } from 'typeorm';
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

  async findAll()
  {
    // return await this.publisherRepository.find({
    //   order: {
    //     publisherName: "ASC",
    //     publisherDate: "ASC",
    //     publisherId: "ASC"
    //   },
    // });
  }

  async findOne(id: number)
  {
    // return await this.publisherRepository.findOne(id);
  }

  async update(id: number, updateShoppingItemDto: UpdateShoppingItemDto)
  {
    // let pub = await this.findOne(id);
    // let pub = new Publisher();
    // pub.publisherId = id;
    // if (updateShoppingItemDto.publisherDate)
    // pub.publisherDate = updateShoppingItemDto.publisherDate;
    // if (updateShoppingItemDto.publisherName)
    // pub.publisherName = updateShoppingItemDto.publisherName;

    await getConnection()
    // .createQueryBuilder()
    // .update(Publisher)
    // .set({ publisherName: pub.publisherName, publisherDate: pub.publisherDate })
    // .where("publisherId = :publisherId", { publisherId: pub.publisherId })
    // .execute();
    return `This action updates a #${id} shoppingItem`;
  }

  async remove(id: number)
  {
    // return await this.publisherRepository.delete(id);
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
