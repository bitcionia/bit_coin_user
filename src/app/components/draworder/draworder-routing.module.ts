import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DraworderComponent } from './draworder/draworder.component';




const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'draworderpage',
        component:DraworderComponent
      },
      
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraworderRoutingModule { }
