import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: String;

    @Column()
    valor: string

    @Column()
    vencimento: Date
    
    @Column({nullable: true})
    parcelas: number

    @Column()
    fixa: boolean
}
