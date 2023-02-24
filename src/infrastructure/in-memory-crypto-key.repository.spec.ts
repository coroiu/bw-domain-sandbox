import { firstValueFrom } from "rxjs";
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
});
