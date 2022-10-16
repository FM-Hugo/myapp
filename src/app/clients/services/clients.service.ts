import { Injectable } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StateClient } from 'src/app/core/enums/state-client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  public collection$: Observable<Client[]>;
  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = environment.urlApi;

    this.collection$ = this.httpClient.get<Client[]>(`${this.urlApi}/clients`);

    console.log(this.collection$);
  }

  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = new Client(item);
    obj.state = state;
    return this.update(obj);
  }

  public update(item: Client): Observable<Client> {
    return this.httpClient.put<Client>(
      `${this.urlApi}/clients/${item.id}`,
      item
    );
  }

  public add(item: Client): Observable<Client> {
    return this.httpClient.post<Client>(`${this.urlApi}/clients`, item);
  }
}
