import { SymmetricCryptoKey } from "../domain/core/symmetric-crypto-key";

const textEncoder = new TextEncoder();

export function createKeyFromString(value: string): SymmetricCryptoKey {
  return new SymmetricCryptoKey(textEncoder.encode(value));
}
