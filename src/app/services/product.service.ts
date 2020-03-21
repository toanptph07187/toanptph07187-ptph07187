import { Injectable } from '@angular/core';
import { data } from '../MockProduct';
import { Product } from '../Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = data;
  selected : Product;
  constructor() { }
  getProducts(){  //Lấy tất cả sản phẩm
    return this.products;
  }
  getProduct(){
    return this.selected;
  }
  addProduct(product){
    let newobj = {...product}
    this.products.push(newobj);
  }
  removeProduct(id){
    return this.products = this.products.filter(product => product.id != id);
  }
  setProduct(product){
    this.selected = product;
    console.log(this.selected)
  }
}
