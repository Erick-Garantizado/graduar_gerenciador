import { Controller, Get, Render } from '@nestjs/common';
import { ContaController } from 'src/app/conta/conta.controller';

@Controller()
export class ViewController {
  constructor(private readonly contaController: ContaController) {}

  @Get()
  @Render('index')
  home() {}

  @Get('lista')
  @Render('lista')
  async lista() {    
    const lista = await this.contaController.findAll()
    return { lista };
  }

  @Get('formulario')
  @Render('criar')
  form() {}

  @Get('edit/:id')
  @Render('edit')
  async editar() {
    // const conta = await this.contaController.findOne()
    return ;
  }
}
