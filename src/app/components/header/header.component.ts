import { Component, OnInit } from '@angular/core';
import { ProductService } from '@mnproject/service/api/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count:number = 0
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getValueOfCount().subscribe(data=>{
      this.count = data
    })
  }

}
