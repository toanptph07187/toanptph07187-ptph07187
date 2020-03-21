import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CategoryComponent } from './category/category.component';
import { SlideComponent } from './slide/slide.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';
import { ProductService } from './services/product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, CategoryComponent, SlideComponent, ProductListComponent, ProductComponent, NavComponent, FooterComponent, TableComponent, DetailComponent, ProductAddComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
