export class Session {
  constructor(
    readonly accessToken: string,
    readonly privateKey: string,
    readonly key: string,
    readonly kdfIterations: number
  ) {}
}
