import { Module } from '@nestjs/common';
import { ViewController } from './view.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conta } from 'src/app/conta/entities/conta.entity';
import { ContaService } from 'src/app/conta/conta.service';
import { ContaController } from 'src/app/conta/conta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Conta])],
  providers: [ContaService, ContaController],
  controllers: [ViewController]
})
export class ViewModule {}
