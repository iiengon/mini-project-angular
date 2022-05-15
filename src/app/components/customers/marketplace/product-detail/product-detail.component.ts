import { Component, OnInit } from '@angular/core';
import { ProductService } from '@mnproject/service/api/product.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  constructor(private productService: ProductService) { }
  productDetail:any;
  textbtn = 'Add Cart'
  carts:any = [];
  activeIdx:any;
  optionValue:any
  amount = 1;
  ngOnInit(): void {
    this.productService.getProductDetail('4668').subscribe(response => {
      this.productDetail = response.data[0]
    })
    console.log(this.productService.getProductToCart())
  }
  selectOption(item:any,idx:any){
    this.activeIdx = item.color_id
    this.optionValue = item;
  }
  increase(){
    this.amount++
  }
  decrease(){
    if(this.amount<=1){
      return
    }
    this.amount--
  }
  addToCart(){
    const dataProduct = {
      productId: this.productDetail.id,
      productName: this.productDetail.title_en,
      thumbnail: this.productDetail.page_image,
      unitPrice: this.productDetail.discount_Price,
      quantity: this.amount,
      optionValue : {
        color_id: this.optionValue.color_id,
        color_name: this.optionValue.color_name_en
      }
    }
    if(this.productService.getProductToCart().length > 0){
      let b = this.productService.getProductToCart().filter((val:any)=> val.productId === this.productDetail.id)
       if(b.length > 0){
        let mapData = b.map((val:any)=>{
          console.log('------',val.quantity+this.amount)
          return {...dataProduct,quantity:val.quantity+this.amount}
        })
        let removeArray = _.remove(this.productService.getProductToCart(), (val:any)=> {
          return val.productId === this.productDetail.id
          });
        this.carts.push(...this.productService.getProductToCart(),...mapData)
     }else{
        this.carts.push(...this.productService.getProductToCart(),dataProduct)
     }
    }else{
      this.carts.push(dataProduct)
    }
    this.carts = _.uniqBy(this.carts, 'productId')
    this.productService.setProductsToCart(this.carts)
    this.countOfProduct();
    console.log(this.productService.getProductToCart())
  }
  countOfProduct(){
    const quantityProduct =  this.productService.getProductToCart().reduce((acc:any,item:any)=>{
             return acc = acc+item.quantity
     },0)
     this.productService.setValueOfCount(quantityProduct)
   }
}
