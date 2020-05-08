import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  API_URL = "./json-files/product.json";
  getProducts() {
    this.http.get(this.API_URL);
  }
}
