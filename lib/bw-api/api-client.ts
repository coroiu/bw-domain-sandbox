import { Observable, switchMap } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { LoginParams } from "../utils/login-params";

import { encode } from "querystring";

import "cross-fetch/polyfill";
import { Utils } from "../utils/utils";

export class ApiClient {
  constructor(private identityUrl: string, private apiUrl: string) {}

  login(params: LoginParams): Observable<unknown> {
    return fromFetch(`${this.identityUrl}/connect/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "auth-email": Utils.fromUtf8ToUrlB64(params.username),
      },
      body: encode(params),
    }).pipe(switchMap((response) => response.json()));
  }
}
