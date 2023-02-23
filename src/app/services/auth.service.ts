import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

interface UserData{
  email:string, 
  password:string
}

@Injectable({
  providedIn: 'root'
})



export class AuthService {
  private renderLogoutBtn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  

  constructor(private auth: Auth) { }

  get sharingObservable(){
    return this.renderLogoutBtn.asObservable();
  }

  set sharingObservableData(data:boolean){
    this.renderLogoutBtn.next(data)
  }

  register(userInfo: UserData){
    return createUserWithEmailAndPassword(this.auth, userInfo.email, userInfo.password);
  }

  login(userInfo: UserData){
    return signInWithEmailAndPassword(this.auth, userInfo.email, userInfo.password)
  }

  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout(){
    return signOut(this.auth);
  }

  

}
