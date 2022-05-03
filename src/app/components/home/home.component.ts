import { Component, OnInit } from '@angular/core';
import { ProductService } from '@mnproject/service/api/product.service';
import { Product } from '@mnproject/models/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  textbtn = "Add to cart"
  arrayCarts:any = []
  count = 0;
  public products:Product[] = []
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    console.log('------>',this.productService.getProductToCart())
    this.productService.getProducts().subscribe((response:any) =>{
      this.products = response.results
    })
    if(this.productService.getProductToCart().length > 0){
      this.arrayCarts = this.productService.getProductToCart();
    }else{
      this.arrayCarts = []
    }
  }
  addToCart(event:any,product:any){
    if(this.arrayCarts.length > 0) {
        const b = this.arrayCarts.filter((val:any)=>{
          return val.productId === product.productId
        })
        if(b.length > 0){
          const a = b.map((val:any)=>{
            return {...val,quantity:val.quantity++}
          })
        }else{
          this.arrayCarts.push({...product,quantity:1})
        }
    }else{
      this.arrayCarts.push({...product,quantity:1})
    }
    this.productService.setProductsToCart(this.arrayCarts)
    this.countOfProduct();
    this.countOfProduct()
    }
    countOfProduct(){
     const quantityProduct =  this.arrayCarts.reduce((acc:any,item:any)=>{
              return acc = acc+item.quantity
      },0)
      this.productService.setValueOfCount(quantityProduct)
    }
  }


