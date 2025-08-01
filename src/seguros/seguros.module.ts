import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seguros } from './entities/seguros.entities';
import { SegurosService } from './services/seguros.service';
import { SegurosController } from './controller/seguros.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Seguros])],
  providers: [SegurosService],
  controllers: [SegurosController],
  exports: [SegurosService],
})
export class SegurosModule {}
