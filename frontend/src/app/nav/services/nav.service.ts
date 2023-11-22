import {Injectable, signal} from '@angular/core';
import {Category} from "../../components/app-header/components/app-nav/category";

@Injectable({
  providedIn: 'root'
})
export class NavService {
  categories: Category[] = []
  openNavPanel = signal(false)

  constructor() {
  }

  setCategories(newCategories: Category[]) {
    this.categories = newCategories
  }
}
