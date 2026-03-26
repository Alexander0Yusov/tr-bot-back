import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreConfig } from './modules/core/core.config';
import { CoreModule } from './modules/core/core.module';
// Импортируй будущие модули здесь
import { TradingModule } from './modules/trading/trading.module';

@Module({
  imports: [
    CoreModule,
    TypeOrmModule.forRootAsync({
      inject: [CoreConfig],
      useFactory: (coreConfig: CoreConfig) => ({
        type: 'postgres',
        url: coreConfig.databaseUrl,
        autoLoadEntities: true,
        synchronize: coreConfig.nodeEnv === 'development',
        namingStrategy: new SnakeNamingStrategy(),
        logging: coreConfig.nodeEnv === 'development',
      }),
    }),
    TradingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
