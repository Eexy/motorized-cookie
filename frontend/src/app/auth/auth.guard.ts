import {CanActivateFn, Router} from "@angular/router";
import {AuthService} from "./services/auth.service";
import {inject} from "@angular/core";
import {environment} from "../../environments/environment";

export function authGuard(): CanActivateFn {
  return () => {
    const authService: AuthService = inject(AuthService)
    const router: Router = inject(Router)

    if (!environment.production) return true

    if (!authService.getToken()) {
      router.navigate(["/auth/signup"])
    }

    return true
  }
}
