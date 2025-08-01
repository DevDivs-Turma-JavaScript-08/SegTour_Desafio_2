import { TypeOrmModule } from '@nestjs/typeorm';
import { Clientes } from './entities/clientes.entities';
import { ClientesController } from './controller/clientes.clontroller';
import { ClientesService } from './services/clientes.services';
import { Module } from '@nestjs/common';
import { SegurosModule } from '../seguros/seguros.module';

@Module({
  imports: [TypeOrmModule.forFeature([Clientes]), SegurosModule],
  controllers: [ClientesController],
  providers: [ClientesService],
  exports: [TypeOrmModule],
})
export class ClientesModule {}
