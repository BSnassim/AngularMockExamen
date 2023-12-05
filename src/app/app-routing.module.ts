import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './features/product/product.module';
import { CartModule } from './features/cart/cart.module';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'product', loadChildren:() => ProductModule},
  {path:'cart', loadChildren:()=>CartModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
