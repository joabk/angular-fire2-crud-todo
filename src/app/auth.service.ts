import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private fAuth: AngularFireAuth ) { 
    this.user = fAuth.authState;
  }

  signup(email: string, password: string){
    this.fAuth
      .auth.createUserWithEmailAndPassword(email, password)
      .then(response=>{
        console.log("Success", response)
      })
      .catch(error=>{
        console.log("Something went wrong ", error.message);
      })
  }

}