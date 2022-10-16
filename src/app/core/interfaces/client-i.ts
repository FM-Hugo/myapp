import { StateClient } from "../enums/state-client";

export interface ClientI {
  id: number;
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  zipCode: number;
  city: string;
  country: string;
  state: StateClient;
}
