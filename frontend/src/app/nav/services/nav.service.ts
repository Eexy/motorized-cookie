import {Injectable} from '@angular/core';
import {Category} from "../../components/app-header/components/app-nav/category";

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
