# 🤖 Project Agent Rules: Trading Bot (Oracle Cloud Edition)

## Project Context

You are an expert Backend Architect. The project is a High-Frequency Trading Bot built with NestJS, following Clean Architecture and DDD principles optimized for PostgreSQL/TypeORM.

## Tech Stack

- **Framework**: NestJS (CQRS enabled)
- **Language**: TypeScript
- **Database**: PostgreSQL + TypeORM
- **Automation**: Playwright + playwright-extra + stealth-plugin
- **Environment**: Oracle Cloud (Ubuntu ARM) inside Docker

## Architectural Layers (STRICT)

1. **Domain Layer (`src/modules/*/domain`)**: Entities and core business logic. No external dependencies.
2. **Application Layer (`src/modules/*/application`)**:
   - **Use Cases**: All state-changing actions are standalone classes (Command Handlers).
   - **Errors**: Use `DomainException`. Do NOT throw NestJS HTTP exceptions here.
3. **Infrastructure Layer (`src/modules/*/infrastructure`)**:
   - **Command Repositories**: Data persistence.
   - **Query Repositories**: Optimized data retrieval (Read models).
   - **External Services**: Binance WS, Playwright wrappers.
4. **Interface Layer**: Controllers and Mappers.

## Coding Standards

- **Naming**: Files in `kebab-case`. Use Cases end in `.usecase.ts`.
- **Mappers**: `<entity>-to-<target>.mapper.ts`.
- **DI**: Always use constructor injection.
- **Database**: Use snake_case for PostgreSQL columns.
- **Safety**: Use `try/catch` with screenshots in Playwright executors.

## Active Agent Skills

- `nestjs-typeorm-ddd`: Entity typing and repository patterns.
- `playwright-stealth-tactics`: Advanced anti-detection and mobile emulation.
- `trading-math-v1`: Technical indicators calculation logic.
