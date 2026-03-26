# 🚀 Implementation Checklist

## Phase 1: Infrastructure & DevOps

- [ ] Initialize NestJS project with `@nestjs/cqrs` and `@nestjs/typeorm`.
- [ ] Create `docker-compose.yml` (PostgreSQL 15 + App).
- [ ] Configure TypeORM naming strategy (snake_case).
- [ ] Setup `Dockerfile` based on `mcr.microsoft.com/playwright`.

## Phase 2: Data & Strategy

- [ ] Implement Binance WebSocket Provider (1m intervals).
- [ ] Create In-memory Candle Buffer (last 200 candles).
- [ ] Integrate `technicalindicators` (RSI, Bollinger, Envelopes).
- [ ] Implement `AnalyzeMarketUseCase` to detect signals.

## Phase 3: Browser Automation

- [ ] Setup Playwright with Stealth Plugin and Mobile Chrome emulation.
- [ ] Implement `HumanTouchService` (random delays, touch offsets).
- [ ] Implement `PocketOptionProvider` (Login, Pair Selection, Execution).
- [ ] Create `SessionManager` to persist `storageState.json`.

## Phase 4: API & Monitoring

- [ ] Create `ExecuteTradeUseCase` (The main workflow).
- [ ] Implement `TradeQueryRepository` for dashboard history.
- [ ] Setup Health-check endpoint for Oracle Cloud monitoring.
- [ ] (Optional) Telegram bot notifications for trade results.
