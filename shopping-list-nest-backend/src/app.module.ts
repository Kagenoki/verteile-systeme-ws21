import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoppingItemModule } from './shopping-item/shopping-item.module';
import { config as dotenvInit } from 'dotenv'
import { TypeOrmModule } from '@nestjs/typeorm';
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
        // '**/*.entity{.ts,.js}'
      ],

      migrationsTableName: 'migration',

      migrations: ['src/migration/*.ts'],

      cli: {
        migrationsDir: 'src/migration',
      },

      // ssl: this.isProduction(),
    })
    , ShoppingItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
