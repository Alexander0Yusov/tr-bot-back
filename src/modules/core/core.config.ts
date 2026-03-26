import { Injectable } from '@nestjs/common';
import { IsIn, IsNotEmpty, IsNumber, IsString, IsUrl, Max, Min } from 'class-validator';
import { configValidationUtility } from './utils/config-validation.utility';

@Injectable()
export class CoreConfig {
  @IsUrl(
    {
      require_protocol: true,
      require_tld: false,
      protocols: ['postgres', 'postgresql'],
    },
    {
      message: '❌ DATABASE_URL missing or invalid. Example: postgresql://user:pass@localhost:5432/db',
    },
  )
  @IsNotEmpty({ message: '❌ DATABASE_URL is required in .env' })
  readonly databaseUrl: string;

  @IsNumber({}, { message: '❌ PORT must be a number' })
  @Min(1)
  @Max(65535)
  readonly port: number;

  @IsString()
  @IsIn(['development', 'production', 'test', 'staging'], {
    message: '❌ NODE_ENV must be one of: development, production, test, staging',
  })
  readonly nodeEnv: string;

  @IsString({ message: '❌ BINANCE_API_KEY must be a string' })
  @IsNotEmpty({ message: '❌ BINANCE_API_KEY is missing! Get it from your Binance account' })
  readonly binanceApiKey: string;

  constructor() {
    // Подтягиваем данные из process.env
    this.databaseUrl = process.env.DATABASE_URL ?? '';
    this.port = Number(process.env.PORT ?? 3000);
    this.nodeEnv = process.env.NODE_ENV ?? 'development';
    this.binanceApiKey = process.env.BINANCE_API_KEY ?? '';

    // Запускаем валидацию. Если что-то не так — сервер упадет с твоими сообщениями.
    configValidationUtility.validateConfig(this);
  }
}