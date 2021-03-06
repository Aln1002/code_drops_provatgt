import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  cadastro: Cadastro = {
    id: null,
    name: '',
    cpf: '',
    telefone: '',
    endereco: '',
    dt_nascimento: '',
    saldo: null
  }

  constructor(private cadastroService: CadastroService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createCadastro(): void {
    this.cadastroService.create(this.cadastro).subscribe(() => {
      this.cadastroService.showMessage('Cadastro criado!')
      this.router.navigate(['/cadastros'])
    })

  }

  cancel(): void {
    this.router.navigate(['/cadastros'])
  }
}
