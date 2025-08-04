import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Clientes } from '../../clientes/entities/clientes.entity';

@Entity({ name: 'tb_seguros' })
export class Seguros {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({
    type: 'enum',
    enum: ['basico', 'premium', 'plus'],
    default: 'basico',
    nullable: false,
  })
  tipoCobertura: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  moeda: string;

  @OneToMany(() => Clientes, (clientes) => clientes.seguros)
  clientes: Clientes[];
}
