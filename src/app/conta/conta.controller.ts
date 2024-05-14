import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get()
  async findAll() {
    return await this.contaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContaDto: UpdateContaDto) {
    return this.contaService.update(+id, updateContaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contaService.remove(+id);
  }
}
