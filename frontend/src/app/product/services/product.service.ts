import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../types/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = []

  constructor(private http: HttpClient) {
  }

  getProductsByCategory(category?: string, limit = 25, page = 1) {
    let query = category ? `category=${category}` : "";
    query = `${query}&limit=${limit}&page=${page}`
    return this.http.get<Product[]>(`http://127.0.0.1:3000/products/?${query}`)
  }

}
