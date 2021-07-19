import { Cadastro } from "../cadastro.model";
import { Router, ActivatedRoute } from "@angular/router";
import { CadastroService } from "../cadastro.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cadastro-update",
  templateUrl: "./cadastro-update.component.html",
  styleUrls: ["./cadastro-update.component.css"],
})
export class CadastroUpdateComponent implements OnInit {
  cadastro: Cadastro;

  constructor(
    private cadastroService: CadastroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.cadastroService.readById(id).subscribe((cadastro) => {
      this.cadastro = cadastro;
    });
  }

  updateCadastro(): void {
    this.cadastroService.update(this.cadastro).subscribe(() => {
      this.cadastroService.showMessage("Cadastro atualizado com sucesso!");
      this.router.navigate(["/cadastros"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/cadastros"]);
  }
}
