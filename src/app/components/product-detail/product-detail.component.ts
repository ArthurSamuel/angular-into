import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from '../product-list/product.type';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product!: IProduct;
  isLoading = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService 
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param['id']) {
        this.isLoading = true;
        this.productService.getProduct(param['id']).subscribe((product) => {
          this.product = product;
          this.isLoading = false;
        });
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.product)
    alert('Added to cart')
  }
}
