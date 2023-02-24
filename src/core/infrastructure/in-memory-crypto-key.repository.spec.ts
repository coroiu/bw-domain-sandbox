import { firstValueFrom } from "rxjs";
import { createKeyFromString } from "../../test-utils/symmetric-crypto-key";
import { InMemoryCryptoKeyRepository } from "./in-memory-crypto-key.repository";

describe("InMemoryCryptoKeyRepository", () => {
  let repository: InMemoryCryptoKeyRepository;

  beforeEach(() => {
    repository = new InMemoryCryptoKeyRepository();
  });

  it("should return undefined when no key has been set", async () => {
    const key = await firstValueFrom(
      repository.getPrivateKey("does-not-exist")
    );

    expect(key).toBeUndefined();
  });

  it("should return previosuly set key when key exists", async () => {
    const userId = "userId";
    const key = createKeyFromString("key");
    await firstValueFrom(repository.setPrivateKey(userId, key));

    const result = await firstValueFrom(repository.getPrivateKey(userId));

    expect(result).toEqual(key);
  });
});
