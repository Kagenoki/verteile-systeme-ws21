import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoppingItemModule } from './shopping-item/shopping-item.module';

@Module({
  imports: [ShoppingItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
