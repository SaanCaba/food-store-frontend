import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

interface ErrorRegister{
  error:{
    errorrs: Array<{
      message:string
    }>
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent {
  userInfo = {
    email : '',
    password: ''
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

    goLogin(){
      return this.router.navigate(['/auth/login'])
    }

  onSubmitForm(userInfo: {email:string,password:string}){
    this.authService.register(userInfo)
    .then(data => {
      this.router.navigate(['/auth/login'])
    })
    .catch(error => {
      let errMessage = convertMessageRegister(error['code'])
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
    })
  }
}

export function convertMessageRegister(code:string) :string{
 console.log(code)
  switch(code){
    case 'auth/user-disabled': {
      return 'Sorry your user is disabled.';
  }
  case 'auth/invalid-email': {
      return 'Bad email, try again.';
  }
  case 'auth/weak-password': {
    return 'Sorry, incorrect password entered. Please try again. (more than 6 characters)';
  }
  case 'auth/email-already-in-use':{
    return 'Sorry, this email name is already taken.'
  }
  default: {
      return 'Register error try again later.';
  }
  }
}
