import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent {

  logged:boolean | null = null;

  constructor(
    private authService: AuthService,
    private router:Router
    ){}

    ngOnInit(){
      if(localStorage.getItem('loggedIn') === 'true'){
        this.logged = true
      }else{
        this.logged = false
      }
    }

  logout(){
    this.authService.logout()
    .then(() =>{
      localStorage.setItem('loggedIn', 'false')
      this.authService.sharingObservableData = false
      this.router.navigate(['/auth/login'])
    })
  }

}
