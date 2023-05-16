import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProdutosComponent } from './produtos/produtos.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "produtos", component: ProdutosComponent},
  {path: "pedidos", component: PedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
