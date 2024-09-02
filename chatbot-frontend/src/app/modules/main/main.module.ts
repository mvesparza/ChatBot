import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './pages/main/main.component';
import { EjemploComponent } from './pages/ejemplo/ejemplo.component';
import { ChatComponent } from './pages/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InformacionComponent } from './pages/informacion/informacion.component';


@NgModule({
  declarations: [
    MainComponent,
    EjemploComponent,
    ChatComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MainRoutingModule
  ]
})
export class MainModule { }
