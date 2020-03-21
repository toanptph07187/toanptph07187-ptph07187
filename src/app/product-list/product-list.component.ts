import { Component, OnInit } from '@angular/core';
import { ProductService} from '../services/product.service';
import { Product } from '../Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : Product[];
  selected: Product;
  constructor(
    private productService : ProductService
  ) { }
  
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  removeItem(id){
    this.products =  this.productService.removeProduct(id)
  }
  showDetail(product1){
    this.selected = product1;
    this.productService.setProduct(product1);
  }
  
  
}
