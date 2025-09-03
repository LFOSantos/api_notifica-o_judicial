import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type Status = 'EM ANDAMENTO' | 'VALIDACAO' | 'CONCLUIDO';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  titulo!: string;

  @Column()
  descricao!: string;

  @Column({ type: 'date' })
  dataAudiencia!: string; // ISO string 'YYYY-MM-DD'

  @Column({ nullable: true })
  nome?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  telefone?: string;

  @Column({ nullable: true })
  endereco?: string;

  @Column({ type: 'varchar', default: 'EM ANDAMENTO' })
  status!: Status;
}
