import { TypeOrmModule } from '@nestjs/typeorm';
import { Clientes } from './entities/clientes.entity';
import { ClientesController } from './controller/clientes.controller';
import { ClientesService } from './services/clientes.service';
import { Module } from '@nestjs/common';
import { SegurosModule } from '../seguros/seguros.module';

@Module({
  imports: [TypeOrmModule.forFeature([Clientes]), SegurosModule],
  controllers: [ClientesController],
  providers: [ClientesService],
  exports: [TypeOrmModule],
})
export class ClientesModule {}
