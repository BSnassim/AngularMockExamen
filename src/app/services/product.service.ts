import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:3000/products";
  constructor(private http:HttpClient) { }

  addProduct(p:any){
    return this.http.post(this.apiUrl,p);
  }
}
