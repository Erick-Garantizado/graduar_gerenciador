import { PartialType } from '@nestjs/mapped-types';
import { CreateContaDto } from './create-conta.dto';

export class UpdateContaDto  {
    nome: string
    valor: number
    vencimento: Date
    parcelas: number
    fixa: boolean
}
