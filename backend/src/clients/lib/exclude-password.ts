import { IClient } from '../types/client';

export function excludePassword(client: IClient): Omit<IClient, 'password'> {
  const parsedClient: Partial<IClient> = client;
  delete parsedClient.password;
  return parsedClient as Omit<IClient, 'password'>;
}
