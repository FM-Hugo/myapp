import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createPopper } from '@popperjs/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  public route: string;
  public label: string;
  public routeEdit: string;
  public labelEdit: string;
  public states: string[];
  public collection$: Observable<Order[]>;
  public headers: string[];
  public labelDelete: string;

  constructor(private ordersService: OrdersService, private router: Router) {
    this.title = 'list of orders';
    this.route = 'add';
    this.label = 'add order';
    this.routeEdit = 'edit';
    this.labelEdit = 'edit';
    this.labelDelete = 'delete';
    this.states = Object.values(StateOrder);
    this.collection$ = this.ordersService.collection$;
    this.headers = [
      'Type',
      'Designation',
      'Client',
      'nbJour',
      'Unit Price HT',
      'Total HT',
      'Total TTC',
      'Status',
    ];
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.title = 'title changed';
  }

  public changeState(item: Order, event: any) {
    const state = event.target.value;

    //change class
    event.path[1].className = '';
    event.path[1].className = 'state-' + state.toLowerCase();
    console.log(event.path[1].className);

    //Object.asign => pass data
    this.ordersService.changeState(item, state).subscribe((data) => {
      Object.assign(item, data);
    });
  }

  public action(item: Order) {
    this.ordersService.delete(item).subscribe(() => {
      console.log("delete")
      window.location.reload();
    });
  }
}
