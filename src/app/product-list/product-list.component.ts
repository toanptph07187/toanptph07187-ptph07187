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
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
  showDetail(product1){
    this.selected = product1;
    this.productService.setProduct(product1);
  }
  
  
}