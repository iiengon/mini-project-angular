import { Component, OnInit } from '@angular/core';
import { ProductService } from '@mnproject/service/api/product.service';
import { Product } from '@mnproject/models/product';
@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {
  public products:Product[] = []
  textbtn = "Add to cart"
  navbarMenus = [
    {
      name: 'All',
      link: 'all',
      active: true
    },
    {
      name: 'Skincare',
      link: 'skincare',
      active: false
    },
    {
      name: 'Makeup',
      link: 'makeup',
      active: false
    },
    {
      name: 'Bodycare',
      link: 'bodycare',
      active: false
    },
    {
      name: 'Bodycare',
      link: 'bodycare',
      active: false
    },
    {
      name: 'Perfume',
      link: 'perfume',
      active: false
    }
  ]
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response:any) =>{
      this.products = response.results
    })
  }
  onNavClick(item:any){
    console.log(item)
    this.navbarMenus.forEach(navs =>{
     return  navs.active = false
    });
    item.active = true;
  }
  getProductId(){

  }
}
