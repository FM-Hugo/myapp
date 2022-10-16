import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public title: string;
  private obs: Observable<any>;
  private sub: Subscription;

  constructor() {
    this.title = 'crm';
    this.obs = new Observable<any>((listX) => {
      listX.next('toto');
    });

    this.sub = this.obs.subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
