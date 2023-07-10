import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware';
import { HttpExceptionFilter } from './cats/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(60000);
}
bootstrap();
