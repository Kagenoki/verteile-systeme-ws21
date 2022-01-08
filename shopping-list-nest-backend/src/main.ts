import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { addAbortSignal } from 'stream';
import { AppModule } from './app.module';
import { config as dotenvInit } from 'dotenv'
import { Logger } from '@nestjs/common';
dotenvInit();
const logger: Logger = new Logger('Main');
const PORT: number = parseInt(process.env.PORT) || 3000;

async function bootstrap()
{
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Shopping List')
    .setDescription('Api description for shopping list')
    .setVersion('1.0')
    .addTag('Shopping-List')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT, () =>
  {
    logger.log(`Server running on Port: ${PORT}`);
  });
}
bootstrap();
