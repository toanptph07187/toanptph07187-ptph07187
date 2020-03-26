import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component'
import { ProductListComponent } from './product-list/product-list.component';
import { TableComponent } from './table/table.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceComponent } from './service/service.component';
import { DetailComponent } from './detail/detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch : 'full'},
  {path: 'home', component: HomeComponent},
  {path:'add-product', component : ProductAddComponent},
  {path:'product-list', component : ProductListComponent},
  {path:'product-manager', component : TableComponent},
  {path:'about', component : AboutComponent},
  {path:'service', component : ServiceComponent},
  {path: 'product-list/:id', component: DetailComponent},
  {path: 'product-manager/:id', component: DetailComponent},
  {path: 'product-manager/edit/:id', component: ProductEditComponent},
  {path:'**', component : NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
