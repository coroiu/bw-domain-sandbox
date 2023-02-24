import { Observable } from "rxjs";
import { SymmetricCryptoKey } from "../domain/symmetric-crypto-key";

export interface CryptoKeyRepository {
  getPrivateKey(userId: string): Observable<SymmetricCryptoKey | undefined>;
  setPrivateKey(
    userId: string,
    symmetricKey: SymmetricCryptoKey
  ): Observable<void>;
}
