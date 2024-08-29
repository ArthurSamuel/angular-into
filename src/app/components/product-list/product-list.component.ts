import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from './product.type';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productList!: IProduct[];

  constructor(private productListService: ProductService) {}

  ngOnInit() {
    this.productListService.getProductLists().subscribe((products) => {
      this.productList = products;
    });
  }

  truncateText(value: string, limit: number = 20): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}
