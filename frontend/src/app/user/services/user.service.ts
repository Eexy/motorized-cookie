import {Injectable} from '@angular/core';
import {User} from "../types/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | null = null;

  constructor() {
  }

  setUser(data: User) {
    this.user = data
  }

}
