import { Component, OnInit } from '@angular/core';
import { ProductService } from '@mnproject/service/api/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private productService:ProductService) { }
  carts:any = []
  totalPrice:number | undefined;
  delivery:any
  deliveryPrice:number = 0;
  ngOnInit(): void {
    this.carts = this.productService.getProductToCart();
    this.calCulator();

  }

  calCulator(){
    console.log('calculator',this.carts)
    this.totalPrice = this.carts.reduce((acc:any,val:any)=>{
        return acc = acc+(val.unitPrice*val.quantity);
    },0)
     console.log(this.totalPrice)
     this.calCulatorDelivery(this.totalPrice)
    }

    calCulatorDelivery(totalPrice:any){
    if(totalPrice <= 300){
        this.delivery = {name:'EMS',value:50}
        this.deliveryPrice = totalPrice+50;
    }else{
        this.delivery = {name:'FREE',value:0}
        this.deliveryPrice = totalPrice;
    }
    }

    changeQuantity(item:any){
      console.log('changeQuantity',item)
      const b = this.carts.filter((val:any)=>{
        return val.productId === item.productId
      })
      if(b.length > 0){
          const a = b.map((val:any)=>{
          return {...val,quantity:val.quantity++}
        })
        }else{
          this.carts.push({...item,quantity:1})
        }
        this,this.calCulator();
    }
    deleteProduct(id:any){
      console.log(id)
     const findIndex = this.carts.findIndex((ele:any) => {
       return ele.productId === id
     }
     )
     this.carts.splice(findIndex,1)
     this.calCulator();
     this.countProductsofCart();
    }
    countProductsofCart(){
      const countProducts = this.carts.reduce((acc:any,item:any)=>{
        return acc = acc+item.quantity
      },0)
      this.productService.setValueOfCount(countProducts)
    }
    fnIncrease(id:any){
      this.carts.find((ele:any)=>{
          if(ele.productId === id){
            return {...ele,quantity: ele.quantity++}
          }
        })
        this.calCulator();
        this.countProductsofCart();
    }
    fnDecrease(id:any){
      this.carts.find((ele:any)=>{
        if(ele.productId === id && ele.quantity>1){
          return {...ele,quantity: ele.quantity--}
        }else{
          return
        }
      })
      this.calCulator();
      this.countProductsofCart();
    }
}
