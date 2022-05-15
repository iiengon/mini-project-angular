import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '@mnproject/models/product';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input('product') product: Product | undefined;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }
  routeProductDetail(productId:any){
    this.router.navigate(['/customers/product', productId]);
  }
}
