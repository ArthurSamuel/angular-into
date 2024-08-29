import { Injectable } from '@angular/core';
import { IProduct } from '../components/product-list/product.type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts:IProduct[] = []

  constructor() { }

  getCart() {
    return this.cartProducts
  }

  addToCart(product: IProduct) {
    this.cartProducts.push(product)
  }
}
