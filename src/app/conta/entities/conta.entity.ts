import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: String;

    @Column()
    valor: number

    @Column()
    vencimento: Date
    
    @Column({nullable: true})
    parcelas: number

    @Column()
    fixa: boolean
}
