export interface LoginParams extends Record<string, string> {
  scope: string;
  client_id: string;
  deviceType: string;
  deviceIdentifier: string;
  deviceName: string;
  grant_type: string;
  username: string;
  password: string;
}
