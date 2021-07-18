import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CadastrosService } from './cadastros.service';
import { CreateCadastroDto } from './dto/create-cadastro.dto';
import { UpdateCadastroDto } from './dto/update-cadastro.dto';

@Controller('cadastros')
export class CadastrosController {
  constructor(private readonly cadastrosService: CadastrosService) { }

  @Post()
  create(@Body() createCadastroDto: CreateCadastroDto) {
    return this.cadastrosService.create(createCadastroDto);
  }

  @Get()
  findAll() {
    return this.cadastrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadastrosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCadastroDto: UpdateCadastroDto) {
    return this.cadastrosService.update(id, updateCadastroDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.cadastrosService.delete(id);
  }
}
