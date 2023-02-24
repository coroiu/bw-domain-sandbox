import { Observable } from "rxjs";

export interface LoginService {
  login(username: string, password: string): Observable<unknown>;
}
