import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCadastroDto } from './dto/create-cadastro.dto';
import { UpdateCadastroDto } from './dto/update-cadastro.dto';
import { Cadastro, CadastroDocument } from './entities/cadastro.entity';

@Injectable()
export class CadastrosService {

  constructor(@InjectModel(Cadastro.name) private cadastroModel: Model<CadastroDocument>) { }

  create(createCadastroDto: CreateCadastroDto) {
    const cadastro = new this.cadastroModel(createCadastroDto);
    return cadastro.save();
  }

  findAll() {
    return this.cadastroModel.find();
  }

  findOne(id: string) {
    return this.cadastroModel.findById(id);
  }

  update(id: string, updateCadastroDto: UpdateCadastroDto) {
    return this.cadastroModel.findByIdAndUpdate(
      {
        _id: id
      },
      {
        $set: updateCadastroDto,
      },
      {
        new: true,
      }
    );
  }

  delete(id: string) {
    return this.cadastroModel.deleteOne({
      _id: id,
    })
      .exec();
  }
}
