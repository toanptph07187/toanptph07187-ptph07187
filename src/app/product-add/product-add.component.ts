import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(
    private productService : ProductService,
    private router : Router) { 
  }
  product : Product = new Product();
  ngOnInit(): void {
  }
  addProduct(){
  this.productService.addProduct(this.product).subscribe(data =>{
    this.product = data;
  });
  this.router.navigate(['/product-manager']);
  }
  }

