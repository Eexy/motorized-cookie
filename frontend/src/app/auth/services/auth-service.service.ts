import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignupDto} from "../dto/signup.dto";
import {SigninDto} from "../dto/signin.dto";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = new BehaviorSubject<string | null>(null)

  constructor(private http: HttpClient, private router: Router) {
  }

  async signup(signupDto: SignupDto) {
    this.http.post<{ token: string }>('http://127.0.0.1:3000/auth/signup', signupDto).subscribe(res => {
      this.token.next(res.token)
      this.router.navigate([""])
    })
  }

  async signin(signinDto: SigninDto) {
    this.http.post<{ token: string }>('http://127.0.0.1:3000/auth/signup', signinDto).subscribe(res => {
      this.token.next(res.token)
      this.router.navigate([""])
    })
  }

  logout() {
    this.token.next(null)
  }

  getToken() {
    return this.token.value
  }
}
