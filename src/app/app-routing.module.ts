import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ManufactureAddComponent } from './components/manufacture-add/manufacture-add.component';
import { DepartmentComponent } from './components/department/department.component';
import { SubpieceComponent } from './components/subpiece/subpiece.component';
import { OrderAddComponent } from './components/order-add/order-add.component';
import { SubpieceAddComponent } from './components/subpiece-add/subpiece-add.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},
  {path:"products",component:ProductComponent},
  {path:"orders",component:OrderComponent},
  {path:"orders/add",component:OrderAddComponent},
  {path:"manufactures",component:ManufactureAddComponent},
  {path:"departments",component:DepartmentComponent},
  {path:"subpieces",component:SubpieceComponent},
  {path:"subpieces/add",component:SubpieceAddComponent},
  {path:"products/add", component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
