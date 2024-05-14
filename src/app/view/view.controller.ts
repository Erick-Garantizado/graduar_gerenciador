import { Controller, Get, Render } from '@nestjs/common';
import { ContaService } from '../conta/conta.service';
import { ContaController } from '../conta/conta.controller';

@Controller()
export class ViewController {
  constructor( 
    // private readonly contaController: ContaController,
    private readonly contaService: ContaService
   ) {}

  @Get()
  @Render('index')
  home() {
    return;
  }

  @Get('lista')
  @Render('lista')
  async lista() {
    
    const lista = await this.contaService.findAll()
    return {lista};
  }

  @Get('formulario')
  @Render('form_despesa')
  form() {
    return { }
  }
}
