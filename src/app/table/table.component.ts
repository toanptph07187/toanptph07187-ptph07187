import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Product';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products : Product[];
  selected : Product;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  
  
  removeProduct(id){
    this.products =  this.productService.removeProduct(id);
  }
}
