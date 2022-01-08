import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoppingItemModule } from './shopping-item/shopping-item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config as dotenvInit } from 'dotenv'
import { ShoppingItem } from './shopping-item/entities/shopping-item.entity';
dotenvInit();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.POSTGRES_DB,

      entities: [
        ShoppingItem,
        // '**/*.entity{.ts,.js}'
      ],
      synchronize: true,

      // migrationsTableName: 'migration',

      // migrations: ['src/migration/*.ts'],

      // cli: {
      //   migrationsDir: 'src/migration',
      // },

      // ssl: this.isProduction(),
    })
    , ShoppingItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
