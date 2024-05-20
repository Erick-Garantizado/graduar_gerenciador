import { Controller, Get, Post, Body, Patch, Param, Delete, Injectable, Render, Redirect } from '@nestjs/common';
import { ContaService } from './conta.service';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';

@Controller('conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Post()
  create(@Body() createContaDto: any) {
    createContaDto.fixa = createContaDto.fixa === 'true';
    createContaDto.parcelas = createContaDto.parcelas ? createContaDto.parcelas : 0
    return this.contaService.create(createContaDto);
  }

  @Get('lista')
  @Render('lista')
  async findAll() {
    const lista = await this.contaService.findAll();
    return { lista };
  }

  @Get('edit/:id')
  @Render('edit')
  async findOne(@Param('id') id: number) {
    const conta = await this.contaService.findOne(id)
    return { conta };
  }

  // @Patch('update/:id')
  @Post('update/:id')
  async update(@Param('id') id: number, @Body() updateContaDto: UpdateContaDto) {
    const res = await this.contaService.update(+id, updateContaDto);
    
    return {res}
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contaService.remove(+id);
  }
}
