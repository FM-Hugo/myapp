import { StateClient } from "../enums/state-client";

export class Client {
  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

  id!: number;
  companyName!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  phone!: string;
  address!: string;
  zipCode!: number;
  city!: string;
  country!: string;
  state!: StateClient;
}
