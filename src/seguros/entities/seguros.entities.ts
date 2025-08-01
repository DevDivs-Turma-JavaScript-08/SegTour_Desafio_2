import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Clientes } from "../../clientes/entities/clientes.entities";


@Entity({name: "tb_seguros"})
export class Seguros {

   @PrimaryGeneratedColumn()
   id: number

   @IsNotEmpty()
   @Column({length:100, nullable: false})
   numeroApolice: string;

   @IsNotEmpty()
   @Column({length:100, nullable: false})
   destino: string;

   @IsNotEmpty()
   @Column({length:100, nullable: false})
   tipoCobertura: string;

   @IsNotEmpty()
   @Column({nullable: false})
   valor: number;

   @IsNotEmpty()
   @Column({length:100, nullable: false})
   moeda: string;

  
   @IsNotEmpty()
   @Column({nullable: false})
   tempoViagem: number;

@OneToMany(() => Clientes, (clientes) => Clientes.seguros)
    clientes: Clientes[];

}