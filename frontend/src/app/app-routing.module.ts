import { CadastroCreateComponent } from './components/cadastro/cadastro-create/cadastro-create.component';
import { CadastroCrudComponent } from './views/product-crud/cadastro-crud.component';
import { CadastroUpdateComponent } from './components/cadastro/cadastro-update/cadastro-update.component';
import { CadastroDeleteComponent } from './components/cadastro/cadastro-delete/cadastro-delete.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cadastros",
    component: CadastroCrudComponent
  },
  {
    path: "cadastros/create",
    component: CadastroCreateComponent
  },
  {
    path: "cadastro/update/:id",
    component: CadastroUpdateComponent
  },
  {
    path: "cadastro/delete/:id",
    component: CadastroDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
