import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../../services/clients.service';
import { StateClient } from 'src/app/core/enums/state-client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit {
  @Input() public init!: Client;
  @Output() public submitted: EventEmitter<Client>;
  public states: string[];
  public form!: FormGroup;
  public collection$: Observable<Client[]>;

  constructor(
    private formBuilder: FormBuilder,
    private clientsService: ClientsService,
    private route: ActivatedRoute
  ) {
    this.submitted = new EventEmitter<Client>();
    this.states = Object.values(StateClient);
    this.collection$ = this.clientsService.collection$;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((map) => map);
    let paramId = this.route.snapshot.queryParams['id'];

    if (paramId) {
      this.collection$.subscribe((clients: Client[]) => {
        clients = clients;
        let clientsL = clients.find((client) => client.id == paramId);
        this.init = clientsL!;
        this.form = this.formBuilder.group({
          companyName: [this.init.companyName, Validators.required],
          firstName: [this.init.firstName, Validators.required],
          lastName: [this.init.lastName, Validators.required],
          email: [this.init.email, Validators.required],
          phone: [this.init.phone, Validators.required],
          country: [this.init.country, Validators.required],
          city: [this.init.city, Validators.required],
          address: [this.init.address, Validators.required],
          zipCode: [this.init.zipCode, Validators.required],
          state: [this.init.state, Validators.required],
        });
      });
    }

    this.form = this.formBuilder.group({
      companyName: [this.init.companyName, Validators.required],
      firstName: [this.init.firstName, Validators.required],
      lastName: [this.init.lastName, Validators.required],
      email: [this.init.email, Validators.required],
      phone: [this.init.phone, Validators.required],
      country: [this.init.country, Validators.required],
      city: [this.init.city, Validators.required],
      address: [this.init.address, Validators.required],
      zipCode: [this.init.zipCode, Validators.required],
      state: [this.init.state, Validators.required],
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}
