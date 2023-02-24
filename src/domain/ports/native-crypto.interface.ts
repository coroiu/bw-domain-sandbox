import { Observable } from "rxjs";
import { SymmetricCryptoKey } from "../core/symmetric-crypto-key";

export interface CryptoFunctionsInterface {
  encrypt(key: SymmetricCryptoKey, data: string): Observable<string>;
  decrypt(key: SymmetricCryptoKey, data: string): Observable<string>;
}
