import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowShoppingComponent } from './show-shopping/show-shopping.component';

const routes: Routes = [
  {path:"", component:ShowShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
