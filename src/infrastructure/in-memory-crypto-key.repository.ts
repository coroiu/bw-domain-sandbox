import { Observable, of } from "rxjs";
import { SymmetricCryptoKey } from "../domain/core/symmetric-crypto-key";
import { CryptoKeyRepository } from "../domain/ports/crypto-key.repository";

export class InMemoryCryptoKeyRepository implements CryptoKeyRepository {
  private keys = new Map<string, SymmetricCryptoKey>();

  getPrivateKey(userId: string): Observable<SymmetricCryptoKey | undefined> {
    const key = this.keys.get(userId);
    return of(key);
  }

  setPrivateKey(
    userId: string,
    symmetricKey: SymmetricCryptoKey
  ): Observable<void> {
    this.keys.set(userId, symmetricKey);
    return of(undefined);
  }
}
