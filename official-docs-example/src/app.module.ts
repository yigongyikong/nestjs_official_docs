import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
// import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { logger } from './common/middleware/logger.middleware';

import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './cats/http-exception.filter';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  // providers: [AppService],
  providers: [
    {
      provide: APP_FILTER, 
      useClass: HttpExceptionFilter,
    },
    AppService
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(LoggerMiddleware)
      .apply(logger)
      // .forRoutes('cats');
      // .forRoutes({ path: 'cats', method: RequestMethod.GET });
      .forRoutes(CatsController);
  }
}

