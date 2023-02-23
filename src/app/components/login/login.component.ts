import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userInfo = {
    email : '',
    password: ''
  }
  constructor(
    private authService: AuthService,
    private router: Router,
  ){
    this.authService.sharingObservableData = false;
  }

  goRegister(){
    return this.router.navigate(['/auth/register'])
  }

  onSubmitForm(userInfo: {email:string,password:string}){
      this.authService.login(userInfo)
      .then((res) => {
        localStorage.setItem('loggedIn', 'true')
        this.router.navigate(['/home/products'])
        this.authService.sharingObservableData = true;
      })
    .catch(error => {
      let errMessage = convertMessage(error['code'])
       Swal.fire({
        title: `<span style='font-weight: bold; font-family: Quicksand' >ERROR!</span>`,
        icon: 'error',
        iconColor: '#f7948b',
        html: `
        <div>
          <p style='font-weight: bold; font-family: Quicksand'>
          ${errMessage}
          </p>
        </div>
        `,
        background: '#f7453b',
        color: 'white',
        confirmButtonText: `<span style='font-weight: bold'>Try again!</span>`,
        confirmButtonColor: '#f7948b',
      });
      // err.error.errorrs.map(e => console.log(e.message))
    })

    
  }
  logingoogle(){
    this.authService.loginWithGoogle()
    .then((res) => {
      localStorage.setItem('loggedIn', 'true')
      this.router.navigate(['/home/products'])
      this.authService.sharingObservableData = true;
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}

  export function convertMessage(code:string) :string{
    switch(code){
      case 'auth/user-disabled': {
        return 'Sorry your user is disabled.';
    }
    case 'auth/invalid-email': {
        return 'Bad email, try again.';
    }

    case 'auth/wrong-password': {
      return 'Sorry, incorrect password entered. Please try again.';
    }
    default: {
        return 'Login error try again later.';
    }
    }
  }
