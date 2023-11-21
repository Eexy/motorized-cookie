import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignupDto} from "../dto/signup.dto";
import {SigninDto} from "../dto/signin.dto";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = new BehaviorSubject<string | null>(null)

  constructor(private http: HttpClient) {
  }

  async signup(signupDto: SignupDto) {
    console.log(signupDto)
    this.http.post<{ token: string }>('http://127.0.0.1:3000/auth/signup', signupDto).subscribe(res => {
      this.token.next(res.token)
    })
  }

  async signin(signinDto: SigninDto) {
    this.http.post<{ token: string }>('http://127.0.0.1:3000/auth/signup', signinDto).subscribe(res => {
      this.token.next(res.token)
    })
  }

  logout() {
    this.token.next(null)
  }

  getToken() {
    return this.token.value
  }
}
