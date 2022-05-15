import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, BehaviorSubject } from 'rxjs';
import { ApiEndpointService } from '@mnproject/service/api/api-endpoint.seervice';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:any = []
  valueObs =  new BehaviorSubject<number>(0);
  count:number = 0
  constructor(private http: HttpClient,  private apiEndpoint: ApiEndpointService,) { }

  getProducts():Observable<any>{
    return this.http.get(this.apiEndpoint.getProdutcs).pipe(map(response => response));
  }

  getProductDetail(id:any): Observable<any> {
    return this.http
      .get(`${this.apiEndpoint.getProductDetail.replace('$productId', id)}`)
      .pipe(map(response => response));
  }


  setProductsToCart(product:any){
    this.products = product
  }
  getProductToCart(){
    return this.products;
  }

  setValueOfCount(value: number) {
    this.valueObs.next(value);
}

  getValueOfCount(): Observable < number > {
    return this.valueObs;
}
}
