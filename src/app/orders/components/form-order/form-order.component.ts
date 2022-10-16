import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { Observable } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { ClientsService } from 'src/app/clients/services/clients.service';
import { Client } from 'src/app/core/models/client';
import { ClientI } from 'src/app/core/interfaces/client-i';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  @Input() public init!: Order ;
  @Output() public submitted: EventEmitter<Order>;
  public states: string[];
  public form!: FormGroup;
  public collection$: Observable<Client[]>;
  public collectionO$: Observable<Order[]>;

  // public paramId: number;

  constructor(
    private formBuilder: FormBuilder,
    private clientsService: ClientsService,
    private ordersService: OrdersService,
    private route: ActivatedRoute
  ) {
    this.submitted = new EventEmitter<Order>();
    this.states = Object.values(StateOrder);
    this.collection$ = this.clientsService.collection$;
    this.collectionO$ = this.ordersService.collection$;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((map) => map);
    let paramId = this.route.snapshot.queryParams['id'];

    if (paramId) {
      this.collectionO$.subscribe((orders: Order[]) => {
      orders = orders;
      let ordersL = orders.find(order => order.id == paramId);
      this.init = ordersL!;
      this.form = this.formBuilder.group({
          typePresta: [this.init.typePresta, Validators.required],
          designation: [this.init.designation, Validators.required],
          client: [this.init.client.id, Validators.required],
          nbDays: [this.init.nbDays, Validators.required],
          unitPrice: [this.init.unitPrice, Validators.required],
          state: [this.init.state, Validators.required],
        });
      });
    }

    this.form = this.formBuilder.group({
      typePresta: [this.init.typePresta, Validators.required],
      designation: [this.init.designation, Validators.required],
      client: [this.init.client, Validators.required],
      nbDays: [this.init.nbDays, Validators.required],
      unitPrice: [this.init.unitPrice, Validators.required],
      state: [this.init.state, Validators.required],
    });
  }

  public onSubmit() {
    this.form.patchValue({ client: { id: this.form.get('client')?.value } });
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}
