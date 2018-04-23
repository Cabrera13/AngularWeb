import { Injectable } from '@angular/core';
import {Observable, Subject, BehaviorSubject} from "rxjs/Rx";
import {AngularFireAuth } from "angularfire2/auth";
import {Router} from "@angular/router";
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireDatabaseProvider, _getAngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  private userDetails: firebase.User = null;




  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
     this.user = firebaseAuth.authState;
     this.user.subscribe((user) => {
        if (user) {
          this.userDetails = user;
        }
        else {
          this.userDetails = null;
        }
     });
  } 
  usdet(){
    return this.userDetails.uid;
  }
  login(email: string, pass: string) {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, pass);
    }
    // Returns true if user is logged in
  authenticated(): boolean {
  // consider changing to 'return this.userDetails != null'
    if (this.userDetails)  {
       return true;
    } else {
       return false;
    }
  }
  logout(){
    
      this.firebaseAuth.auth.signOut();
      this.router.navigate(['/']);

  }
  

}