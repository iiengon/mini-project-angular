import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@mnproject/models/product';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input('product') product: Product | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
