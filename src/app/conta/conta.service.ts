import { Injectable } from '@nestjs/common';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Conta } from './entities/conta.entity';
import { Repository } from 'typeorm';
import { throwError } from 'rxjs';

@Injectable()
export class ContaService {
  constructor(
    @InjectRepository(Conta)
    private readonly contaRepository: Repository<Conta>
  ){}
  
  async create(createContaDto: CreateContaDto) {
    return await this.contaRepository.save(createContaDto);
  }

  async findAll(): Promise<Conta[]> {
    return await this.contaRepository.find();
  }

  async findOne(id: number): Promise<Conta> {
    return this.contaRepository.findOne({ where: { id } })
  }

  async update(id: number, updateContaDto: UpdateContaDto) {
    const conta = await this.contaRepository.findBy({ id })
    if (!conta) {
      throw new Error("Sem resultados")
    }    
    
    Object.assign(conta, updateContaDto)
    
    return this.contaRepository.save(conta);
  }

  async remove(id: number) {
    return `This action removes a #${id} conta`;
  }
}
