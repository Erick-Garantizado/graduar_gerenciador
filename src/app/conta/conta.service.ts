import { Injectable } from '@nestjs/common';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Conta } from './entities/conta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContaService {
  constructor(
    @InjectRepository(Conta)
    private readonly contaRepository: Repository<Conta>
  ){}
  
  async create(createContaDto: CreateContaDto) {
    return await this.contaRepository.save(createContaDto);
  }

  async findAll() {
    return await this.contaRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} conta`;
  }

  async update(id: number, updateContaDto: UpdateContaDto) {
    return `This action updates a #${id} conta`;
  }

  async remove(id: number) {
    return `This action removes a #${id} conta`;
  }
}
