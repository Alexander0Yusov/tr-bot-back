import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trade } from './domain/trade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trade])],
  // Сюда добавим UseCases и Providers позже
  providers: [],
  exports: [TypeOrmModule],
})
export class TradingModule {}