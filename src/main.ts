import { firstValueFrom } from "rxjs";
import { ApiClient } from "../lib/bw-api/api-client";

import { config } from "./config";

const IdentityUrl = "http://localhost:33656";
const ApiUrl = "http://localhost:4000";

const apiClient = new ApiClient(IdentityUrl, ApiUrl);

async function run() {
  const response = await firstValueFrom(
    apiClient.login({
      scope: "api offline_access",
      client_id: "web",
      deviceType: "10",
      deviceName: "firefox",
      grant_type: "password",
      deviceIdentifier: config.deviceIdentifier,
      username: config.username,
      password: config.password,
    })
  );

  console.log("Login response", response);
}

run().catch(console.error);
