import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Clientes } from '../entities/clientes.entities';
import { ClientesService } from '../services/clientes.services';

@Controller('/clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Clientes[]> {
    return this.clientesService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Clientes> {
    return this.clientesService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Clientes[]> {
    return this.clientesService.findbyAllNome(nome);
  }

  @Get('/valor/:valor')
  @HttpCode(HttpStatus.OK)
  findAllbyPreco(
    @Param('valor', ParseIntPipe) valor: number,
  ): Promise<Clientes[]> {
    return this.clientesService.findAllbyPreco(valor);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() clientes: Clientes): Promise<Clientes> {
    return this.clientesService.create(clientes);
  }

  @Put()
  @HttpCode(HttpStatus.CREATED)
  update(@Body() clientes: Clientes): Promise<Clientes> {
    return this.clientesService.update(clientes);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.clientesService.delete(id);
  }
}
