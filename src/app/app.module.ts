import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FormComponent } from './paginas/form/form.component';
import { HomeComponent } from './paginas/home/home.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { TabelaComponent } from './paginas/tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    FormComponent,
    TabelaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
