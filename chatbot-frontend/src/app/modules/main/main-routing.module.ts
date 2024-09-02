import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent} from './pages/main/main.component';
import { EjemploComponent } from './pages/ejemplo/ejemplo.component';
import { DegreeComponent } from './pages/degree/degree.component';
import { ChatComponent } from './pages/chat/chat.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
const routes: Routes = [
  {
    path: 'principal',
    component: MainComponent
  },
  {
    path: 'ejemplo',
    component: EjemploComponent
  },
  {
    path: 'degree',
    component: DegreeComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  }
  ,
  {
    path: 'informacion',
    component: InformacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
