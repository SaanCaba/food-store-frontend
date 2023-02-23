import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  renderBtnLogout$: Observable<boolean>;
  render: boolean = false
  constructor(private authService: AuthService){
    this.renderBtnLogout$ = authService.sharingObservable
  }

  ngOnInit(){
    if(localStorage.getItem('loggedIn') === 'true'){
      console.log('si')
      this.authService.sharingObservableData = true;
      this.renderBtnLogout$.subscribe(data => {
        this.render = data
      })
    }
    if(localStorage.getItem('loggedIn') === 'false'){
      console.log('no')
      this.authService.sharingObservableData = false;
      this.renderBtnLogout$.subscribe(data => {
        this.render = data
      })
    }
    console.log('hola')
  }
}
