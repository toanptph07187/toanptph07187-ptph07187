import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  product : Product = {
    name : "Product Name 1",
    price : 12.98,
    desc : "Mô tả thông tin của sản phẩm",
    img : "http://placehold.it/700x400",
    status : true
  }
  changeStatus(){
    this.product.status = false;
  }
  changeTitle(e){
    this.product.name = e.target.value;
  }
}