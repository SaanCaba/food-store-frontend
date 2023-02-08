import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private renderFooter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {}

  get sharingObservable() {
    return this.renderFooter.asObservable();
  }

  set sharingObservableData(data: boolean) {
    this.renderFooter.next(data);
  }
}
