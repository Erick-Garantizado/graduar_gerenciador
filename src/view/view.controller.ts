import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class ViewController {
  constructor() {}

  @Get()
  @Render('index')
  home() {}

  @Get('formulario')
  @Render('criar')
  form() {}

  @Get('edit/:id')
  @Render('edit')
  async editar() {
    // const conta = await this.contaController.findOne()
    return ;
  }

  @Get('erro')
  @Render('erro')
  erro(){}
}
