import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Seguros } from '../entities/seguros.entities';

@Injectable()
export class SegurosService {
  constructor(
    @InjectRepository(Seguros)
    private segurosRepository: Repository<Seguros>,
  ) {}

  async findAll(): Promise<Seguros[]> {
    return await this.segurosRepository.find();
  }
  async findById(id: number): Promise<Seguros> {
    const seguros = await this.segurosRepository.findOne({
      where: {
        id,
      },
      relations: {
        clientes: true,
      },
    });

    if (!seguros)
      throw new HttpException('Seguro não encontrado!', HttpStatus.NOT_FOUND);

    return seguros;
  }

  async findAllbySeguros(nome: string): Promise<Seguros[]> {
    return await this.segurosRepository.find({
      where: {
        tipoCobertura: ILike(`%${nome}%`),
      },
      relations: {
        clientes: true,
      },
    });
  }
  async findAllbyPreco(nome: number): Promise<Seguros[]> {
    return await this.segurosRepository.find({
      where: {
        valor: nome,
      },
      relations: {
        clientes: true,
      },
    });
  }
  async create(seguros: Seguros): Promise<Seguros> {
    return await this.segurosRepository.save(seguros);
  }
  async update(seguros: Seguros): Promise<Seguros> {
    await this.findById(seguros.id);
    return await this.segurosRepository.save(seguros);
  }
  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.segurosRepository.delete(id);
  }
}
