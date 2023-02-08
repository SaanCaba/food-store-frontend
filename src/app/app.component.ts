import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'food-project';
  renderFooter$: Observable<boolean>;
  render: boolean = false;
  constructor(private storeService: StoreService) {
    this.renderFooter$ = storeService.sharingObservable;
  }
  ngOnInit() {
    this.storeService.sharingObservableData = true;
    this.renderFooter$.subscribe((data) => {
      this.render = data;
    });
  }
}
