export class Utils {
  static fromB64ToArray(str: string): Uint8Array {
    return new Uint8Array(Buffer.from(str, "base64"));
  }

  static fromUrlB64ToArray(str: string): Uint8Array {
    return Utils.fromB64ToArray(Utils.fromUrlB64ToB64(str));
  }

  static fromHexToArray(str: string): Uint8Array {
    return new Uint8Array(Buffer.from(str, "hex"));
  }

  static fromUtf8ToArray(str: string): Uint8Array {
    return new Uint8Array(Buffer.from(str, "utf8"));
  }

  static fromByteStringToArray(str: string): Uint8Array {
    const arr = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) {
      arr[i] = str.charCodeAt(i);
    }
    return arr;
  }

  static fromBufferToB64(buffer: ArrayBuffer): string {
    return Buffer.from(buffer).toString("base64");
  }

  static fromBufferToUrlB64(buffer: ArrayBuffer): string {
    return Utils.fromB64toUrlB64(Utils.fromBufferToB64(buffer));
  }

  static fromB64toUrlB64(b64Str: string) {
    return b64Str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }

  static fromBufferToUtf8(buffer: ArrayBuffer): string {
    return Buffer.from(buffer).toString("utf8");
  }

  // static fromBufferToByteString(buffer: ArrayBuffer): string {
  //   return String.fromCharCode.apply(null, new Uint8Array(buffer));
  // }

  // ref: https://stackoverflow.com/a/40031979/1090359
  static fromBufferToHex(buffer: ArrayBuffer): string {
    return Buffer.from(buffer).toString("hex");
  }

  static fromUrlB64ToB64(urlB64Str: string): string {
    let output = urlB64Str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += "==";
        break;
      case 3:
        output += "=";
        break;
      default:
        throw new Error("Illegal base64url string!");
    }

    return output;
  }

  static fromUrlB64ToUtf8(urlB64Str: string): string {
    return Utils.fromB64ToUtf8(Utils.fromUrlB64ToB64(urlB64Str));
  }

  static fromUtf8ToB64(utfStr: string): string {
    return Buffer.from(utfStr, "utf8").toString("base64");
  }

  static fromUtf8ToUrlB64(utfStr: string): string {
    return Utils.fromBufferToUrlB64(Utils.fromUtf8ToArray(utfStr));
  }

  static fromB64ToUtf8(b64Str: string): string {
    return Buffer.from(b64Str, "base64").toString("utf8");
  }

  // ref: http://stackoverflow.com/a/2117523/1090359
  static newGuid(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  static isGuid(id: string) {
    return RegExp(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
      "i"
    ).test(id);
  }
}
