import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$: Observable<any>;

  constructor(productService: ProductService) {
    this.products$ = productService.getAll();
  }

  ngOnInit(): void {
  }



}
