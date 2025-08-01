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
import { Seguros} from 'src/seguros/entities/seguros.entities';

@Controller('/seguros')
export class SegurosController {
  constructor(private readonly segurosService: SegurosController) {}

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

  @Get('/valor/:valor')
  @HttpCode(HttpStatus.OK)
  findByValor(@Param('valor') valor: number): Promise<Seguros[]> {
      return this.segurosService.findByValor(valor);
}

  @Get('/cobertura/:cobertura')
  @HttpCode(HttpStatus.OK)
  findByCobertura(@Param('cobertura') nome: string): Promise<Seguros[]> {
    return this.segurosService.findByCobertura(nome);
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
