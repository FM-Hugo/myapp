import { StateOrder } from '../enums/state-order';
import { Client } from '../models/client';
import { Order } from '../models/order';

export interface OrderI {
  // tjmHt: number;
  // nbJours: number;
  // tva: number;
  // state: StateOrder;
  // typePresta: string;
  // client: string;
  // comment: string;
  // id: number;
  id: number;
  client: Client;
  typePresta: string;
  designation: string;
  nbDays: number;
  unitPrice: number;
  state: StateOrder;
  totalExcludeTaxe?: number;
  totalWithTaxe?: number;
}
