import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Clientes } from '../entities/clientes.entity';
import { DeleteResult } from 'typeorm/browser';
import { SegurosService } from '../../seguros/services/seguros.service';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Clientes)
    private clientesRepository: Repository<Clientes>,
    private segurosService: SegurosService,
  ) {}

  async findAll(): Promise<Clientes[]> {
    return await this.clientesRepository.find({
      relations: {
        seguros: true,
      },
    });
  }

  async findById(id: number): Promise<Clientes> {
    const clienteid = await this.clientesRepository.findOne({
      where: {
        id,
      },
      relations: {
        seguros: true,
      },
    });

    if (!clienteid)
      throw new HttpException('Cliente não encontrado!', HttpStatus.NOT_FOUND);

    return clienteid;
  }

  async findbyAllNome(nome: string): Promise<Clientes[]> {
    return await this.clientesRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        seguros: true,
      },
    });
  }

  async findAllbyPreco(nome: number): Promise<Clientes[]> {
    return await this.clientesRepository.find({
      where: {
        valor: nome,
      },
      relations: {
        seguros: true,
      },
    });
  }

  async create(clienteid: Clientes): Promise<Clientes> {
    if (clienteid.seguros && clienteid.seguros.id) {
      const seguro = await this.segurosService.findById(clienteid.seguros.id);
      clienteid.seguros = seguro;
    }

    if (clienteid.tempoViagem > 7 && clienteid.tempoViagem < 15) {
      clienteid.valorFinal = clienteid.valor * 0.85;
    } else if (clienteid.tempoViagem >= 15) {
      clienteid.valorFinal = clienteid.valor * 0.8;
    } else {
      clienteid.valorFinal = clienteid.valor;
    }

    if (clienteid.destino == 'Estados Unidos' || clienteid.destino == 'Canada'){
      clienteid.valorFinal *= 1.2;
    }

    return await this.clientesRepository.save(clienteid);
  }

  async update(clienteid: Clientes): Promise<Clientes> {
    await this.findById(clienteid.id);
    if (clienteid.seguros && clienteid.seguros.id) {
      const seguro = await this.segurosService.findById(clienteid.seguros.id);
      clienteid.seguros = seguro;
    }

    if (clienteid.tempoViagem > 7 && clienteid.tempoViagem < 15) {
      clienteid.valorFinal = clienteid.valor * 0.85;
    } else if (clienteid.tempoViagem >= 15) {
      clienteid.valorFinal = clienteid.valor * 0.8;
    } else {
      clienteid.valorFinal = clienteid.valor;
    }
    return await this.clientesRepository.save(clienteid);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.clientesRepository.delete(id);
  }
}
