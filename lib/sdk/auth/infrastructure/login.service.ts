import { Observable } from "rxjs";
import { LoginService as BaseLoginService } from "../ports/login.service";

export class LoginService implements BaseLoginService {
  login(username: string, password: string): Observable<unknown> {
    throw new Error("Method not implemented.");
  }
}
