import { TesteService } from './teste.service';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovoComponenteComponent } from './paginas/novo-componente/novo-componente.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PedidoComponent } from './pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    NovoComponenteComponent,
    DiretivasComponent,
    HomeComponent,
    ProdutosComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [TesteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
