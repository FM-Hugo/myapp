import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  public title: string;
  public states: string[];
  public collection$: Observable<Client[]>;
  public headers: string[];
  public route: string;
  public label: string;
  public routeEdit: string;
  public labelEdit: string;

  constructor(private clientsService: ClientsService) {
    this.title = 'list of clients';
    this.states = Object.values(StateClient);
    this.collection$ = this.clientsService.collection$;
    this.headers = [
      'Entreprise',
      'Client',
      'Email',
      'Phone',
      'Pays',
      'Ville',
      'Status',
    ];
    this.route = 'add';
    this.label = 'add client';
    this.routeEdit = 'edit';
    this.labelEdit = 'edit';
  }

  ngOnInit(): void {}

  public changeState(item: Client, event: any) {
    const state = event.target.value;

    //change class
    event.path[1].className = '';
    event.path[1].className = 'state-' + state.toLowerCase();
    console.log(event.path[1].className);

    this.clientsService.changeState(item, state).subscribe((data) => {
      Object.assign(item, data);
    });
  }
}
