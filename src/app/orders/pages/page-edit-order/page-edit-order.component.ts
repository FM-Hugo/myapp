import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public order: Order;
  public collection$: Observable<Order[]>;

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.order = new Order();
    this.collection$ = this.ordersService.collection$;
  }

  ngOnInit(): void {}

  public action(item: Order) {
    this.route.queryParams.subscribe((map) => map);
    let paramId = this.route.snapshot.queryParams['id'];
    item['id'] = paramId;
    this.ordersService.update(item).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
