import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss'],
})
export class PageEditClientComponent implements OnInit {
  public client: Client;
  public collection$: Observable<Client[]>;

  constructor(
    private clientsService: ClientsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.client = new Client();
    this.collection$ = this.clientsService.collection$;
  }

  ngOnInit(): void {}

  public action(item: Client) {
    this.route.queryParams.subscribe((map) => map);
    let paramId = this.route.snapshot.queryParams['id'];
    item['id'] = paramId;
    this.clientsService.update(item).subscribe(() => {
      this.router.navigate(['clients']);
    });
  }
}
