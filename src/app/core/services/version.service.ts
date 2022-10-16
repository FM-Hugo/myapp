import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public numVersion: BehaviorSubject<number>;

  constructor() {
    this.numVersion = new BehaviorSubject<number>(1);
  }

  public incrementVersion(): void {
    // correction
    // console.log(this.numVersion.value + 1);
    this.numVersion.next(this.numVersion.value + 1);
  }
}
