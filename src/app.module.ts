import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CadastrosModule } from './cadastros/cadastros.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:admin2021@cluster0.fqgeb.mongodb.net/project?retryWrites=true&w=majority'),
    CadastrosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
