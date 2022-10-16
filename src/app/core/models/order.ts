import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';
import { Client } from './client';

export class Order implements OrderI {
  // tjmHt = 1200;
  // nbJours = 1;
  // tva = 20;
  // state = StateOrder.OPTION;
  // typePresta!: string;
  // client!: string;
  // comment!: string;
  // id!: number;
  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
  id!: number;

  client!: Client;

  typePresta!: string;

  designation!: string;

  nbDays!: number;

  unitPrice!: number;

  state!: StateOrder;

  totalExcludeTaxe?: number;

  totalWithTaxe?: number;
}
