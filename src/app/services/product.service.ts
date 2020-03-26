import { Injectable } from '@angular/core';
import { data } from '../MockProduct';
import { Product } from '../Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private api = "https://5e7c54c4a917d700166831cf.mockapi.io/product";

  constructor(
    private http: HttpClient
  ) { }
  getProducts():Observable<Product[]>  {  //Lấy tất cả sản phẩm
    return this.http.get<Product[]>(this.api);
  }
  getProduct(id):Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
    
  }
  addProduct(product):Observable<Product>{
    return this.http.post<Product>(`${this.api}`,product);
    // let newobj = {img : "http://placehold.it/700x400",desc : "Mô tả thông tin của sản phẩm",...product}
    // this.products.push(newobj);
  }
  removeProduct(id):Observable<Product>{
    return this.http.delete<Product>(`${this.api}/${id}`);
    // return this.products = this.products.filter(product => product.id != id);
  }

  updateProduct(product):Observable<Product>{
    return this.http.put<Product>(`${this.api}/${product.id}`,product);
    // return this.products.map(item => item.id === product.id ? product : item )
  }
}
