import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('trades')
export class Trade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pair: string; // Например, BTCUSDT

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column()
  side: 'CALL' | 'PUT';

  @Column({ name: 'entry_price', type: 'decimal', precision: 18, scale: 8, nullable: true })
  entryPrice: number;

  @Column({ nullable: true })
  status: 'OPEN' | 'WIN' | 'LOSS' | 'DRAW';

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}