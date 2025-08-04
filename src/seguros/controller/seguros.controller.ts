import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Seguros } from 'src/seguros/entities/seguros.entities';
import { SegurosService } from '../services/seguros.service';

@Controller('/seguros')
export class SegurosController {
  constructor(private readonly segurosService: SegurosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Seguros[]> {
    return this.segurosService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Seguros> {
    return this.segurosService.findById(id);
  }

  @Get('/cobertura/:cobertura')
  @HttpCode(HttpStatus.OK)
  findAllbySeguros(@Param('cobertura') nome: string): Promise<Seguros[]> {
    return this.segurosService.findAllbySeguros(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() seguros: Seguros): Promise<Seguros> {
    return this.segurosService.create(seguros);
  }

  @Put()
  @HttpCode(HttpStatus.CREATED)
  update(@Body() seguros: Seguros): Promise<Seguros> {
    return this.segurosService.update(seguros);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.segurosService.delete(id);
  }
}
