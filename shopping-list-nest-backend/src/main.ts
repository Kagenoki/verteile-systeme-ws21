import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config as dotenvInit } from 'dotenv'
import { Logger } from '@nestjs/common';
dotenvInit();
const logger: Logger = new Logger('Main');
const PORT: number = parseInt(process.env.PORT) || 3000;

async function bootstrap()
{
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () =>
  {
    logger.log(`Server running on Port: ${PORT}`);
  });
}
bootstrap();
