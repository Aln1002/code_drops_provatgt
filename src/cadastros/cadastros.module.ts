import { Module } from '@nestjs/common';
import { CadastrosService } from './cadastros.service';
import { CadastrosController } from './cadastros.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cadastro, CadastroSchema } from './entities/cadastro.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cadastro.name, schema: CadastroSchema }])],
  controllers: [CadastrosController],
  providers: [CadastrosService]
})
export class CadastrosModule {}
