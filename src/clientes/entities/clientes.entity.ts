import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Seguros } from '../../seguros/entities/seguros.entity';

@Entity({ name: 'tb_clientes' })
export class Clientes {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  email: string;

  @IsNotEmpty()
  @Column({ type: 'bigint', nullable: false })
  telefone: number;

  @IsNotEmpty()
  @Column({ type: 'date', nullable: false })
  dataNascimento: Date;

  @IsNotEmpty()
  @Column({ type: 'bigint', nullable: false })
  cpf: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  endereço: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  numeroApolice: string;

  @IsNotEmpty()
  @Column({ nullable: false })
  tempoViagem: number;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  valor: number;

  @IsNotEmpty()
  @Column({ length: 30, nullable: false})
  destino: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  valorFinal: number;

  @ManyToOne(() => Seguros, (seguros) => seguros.clientes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'seguros_id' })
  seguros: Seguros;
}
