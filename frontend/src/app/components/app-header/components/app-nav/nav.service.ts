import {Injectable} from '@angular/core';
import {Category} from "./category";

@Injectable({
  providedIn: 'root'
})
export class NavService {
  categories: Category[] = []

  constructor() {
  }

  setCategories(newCategories: Category[]) {
    this.categories = newCategories
  }
}
