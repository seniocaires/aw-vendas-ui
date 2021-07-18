import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {ToastModule} from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VendasListagemComponent } from './vendas-listagem/vendas-listagem.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';
import { InputTextModule } from 'primeng/inputtext';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VendasListagemComponent,
    VendaCadastroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CurrencyMaskModule,
    FormsModule,
    TableModule,
    DropdownModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MessageService,
    {
      provide: LOCALE_ID, useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
