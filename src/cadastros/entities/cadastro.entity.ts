import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CadastroDocument = Cadastro & Document;

@Schema()
export class Cadastro {
    @Prop()
    id: string;
    
    @Prop()
    cpf: string;

    @Prop()
    name: string;

    @Prop()
    telefone: string;

    @Prop()
    endereco: string;

    @Prop()
    dt_nascimento: string;
}

export const CadastroSchema = SchemaFactory.createForClass(Cadastro);