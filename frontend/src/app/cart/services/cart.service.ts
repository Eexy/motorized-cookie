import {effect, Injectable, signal} from '@angular/core';
import {Product} from "../../product/types/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products = signal<Product[]>([])


  constructor() {
    this.loadCartFromLocalStorage()

    // save cart in localstorage on every update
    effect(() => {
      localStorage.setItem("cart", JSON.stringify(this.products()))
    })
  }

  loadCartFromLocalStorage() {
    const data = localStorage.getItem("cart")

    if (data) {
      this.products.set(JSON.parse(data))
    }
  }

  removeProductFromCart(productId: number) {
    const filteredProducts = this.products().filter(product => product.id != productId)
    this.products.set(filteredProducts)
  }

  addProductToCart(product: Product) {
    this.products.set([...this.products(), product])
  }

}
