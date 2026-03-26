import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { CoreConfig } from './core.config';

@Global()
@Module({
  imports: [CqrsModule, ConfigModule.forRoot({ isGlobal: true })],
  providers: [CoreConfig],
  exports: [CqrsModule, CoreConfig],
})
export class CoreModule {}
