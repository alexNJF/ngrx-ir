import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TouterialComponent } from './touterial.component';

const routes: Routes = [
  {
    path: '',
    component: TouterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TouterialRoutingModule { }
