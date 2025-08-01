import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Clientes } from '../entities/clientes.entities';
import { DeleteResult } from 'typeorm/browser';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Clientes)
    private clientesRepository: Repository<Clientes>,
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
  async create(clienteid: Clientes): Promise<Clientes> {
    return await this.clientesRepository.save(clienteid);
  }

  async update(clienteid: Clientes): Promise<Clientes> {
    await this.findById(clienteid.id);
    return await this.clientesRepository.save(clienteid);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.clientesRepository.delete(id);
  }
}
