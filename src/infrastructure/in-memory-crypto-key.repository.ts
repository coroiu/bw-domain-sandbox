import { Observable, of } from "rxjs";
import { SymmetricCryptoKey } from "../domain/core/symmetric-crypto-key";
import { CryptoKeyRepository } from "../domain/ports/crypto-key.repository";

export class InMemoryCryptoKeyRepository implements CryptoKeyRepository {
  getPrivateKey(userId: string): Observable<SymmetricCryptoKey | undefined> {
    return of(undefined);
  }

  setPrivateKey(
    userId: string,
    symmetricKey: SymmetricCryptoKey
  ): Observable<void> {
    throw new Error("Method not implemented.");
  }
}
