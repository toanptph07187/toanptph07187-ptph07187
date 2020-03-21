import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private productService : ProductService) { 
  }
  product : Product = new Product();
  ngOnInit(): void {
  }
  addProduct(){
  this.productService.addProduct(this.product);
  }
  }

