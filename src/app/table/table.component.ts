import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products : Product[];
  product : Product;
  constructor(
    private productService : ProductService,
    private router : Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(){
    this.productService.getProducts().subscribe(data => {
        this.products = data;
    })
  }
  
  removeProduct(id){
    this.productService.removeProduct(id).subscribe(reponse => {
      this.products = this.products.filter(product => product.id != reponse.id)
    });
   
    // this.products =  this.productService.removeProduct(id);
  }
}
