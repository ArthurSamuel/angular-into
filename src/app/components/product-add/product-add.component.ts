import { Component } from '@angular/core';
import { IProduct } from '../product-list/product.type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  dataForm:Omit<IProduct, "image" | "id"> = {
    title: '',
    price: 0,
    category: '',
    description: ''
  }

  constructor(private productService: ProductService) {}

  onSubmit() {
    this.productService.addProduct(this.dataForm)
  }
}
