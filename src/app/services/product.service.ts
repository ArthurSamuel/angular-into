import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../components/product-list/product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductLists():Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
  }

  getProduct(id:number):Observable<IProduct> {
    return this.http.get<IProduct>(`https://fakestoreapi.com/products/${id}`)
  }

  addProduct(addedProduct:Omit<IProduct, "image" | "id">) {
    this.http.post('https://fakestoreapi.com/products', addedProduct).subscribe((item) => {
      console.log(item)
      alert('Item Added')
    })
  }
}
