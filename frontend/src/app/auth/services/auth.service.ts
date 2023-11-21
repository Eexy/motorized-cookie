import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignupDto} from "../dto/signup.dto";
import {SigninDto} from "../dto/signin.dto";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
  }

  async signup(signupDto: SignupDto) {
    if (!environment.production) {
      localStorage.setItem("token", "token")
      return this.router.navigate([""])
    }

    return this.http.post<{ token: string }>('http://127.0.0.1:3000/auth/signup', signupDto).subscribe(res => {
      this.router.navigate([""])
    })
  }

  async signin(signinDto: SigninDto) {
    if (!environment.production) {
      localStorage.setItem("token", "token")
      return this.router.navigate([""])
    }
    return this.http.post<{ token: string }>('http://127.0.0.1:3000/auth/signup', signinDto).subscribe(res => {
      localStorage.setItem("token", res.token)
      this.router.navigate([""])
    })
  }

  logout() {
    localStorage.removeItem("token")
    this.router.navigate([""])
  }

  getToken() {
    return localStorage.getItem("token")
  }
}