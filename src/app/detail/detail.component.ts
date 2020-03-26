import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product : Product;
  constructor(
    private productService : ProductService,
    private route :ActivatedRoute
  ) { }
  
  ngOnInit() {
    
    this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data => {
       this.product = data;
      })
    });
      
  }

}