import { Module } from '@nestjs/common';
import { ViewController } from './view.controller';
import { ContaModule } from '../conta/conta.module';
import { ContaController } from '../conta/conta.controller';
import { ContaService } from '../conta/conta.service';
import { AppModule } from 'src/app.module';

@Module({
  imports: [ContaModule],
  // providers: [ContaService],
  controllers: [ViewController]
})
export class ViewModule {}
