import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiEndpointService {

  get getProdutcs(){
    return  `${environment.endpointAPI}${environment.Product.getProducts}`;
  }
  get getProductDetail(){
    return  `${environment.endpointAPI}${environment.Product.getProductDetail}`;
  }

}
