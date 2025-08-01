import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Seguros } from '../../seguros/entities/seguros.entities';

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
  @Column({ length: 20, nullable: false })
  telefone: string;

  @IsNotEmpty()
  @Column({ length: 10, nullable: false })
  dataNascimento: string;

  @IsNotEmpty()
  @Column({ length: 20, nullable: false })
  cpf: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  endereço: string;

  @ManyToOne(() => Seguros, (seguros) => seguros.clientes, {
    onDelete: 'CASCADE',
  })
  seguros: Seguros;
  static seguros: any;
}

export { Seguros };
