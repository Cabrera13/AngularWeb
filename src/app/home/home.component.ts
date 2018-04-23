import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  email: "";
  password: "";

  constructor(private authService: AuthService,
                private router:Router) {
  }
  ngOnInit() {
    console.log(this.authService.authenticated());
    if (this.authService.authenticated()) {

             this.router.navigate(['/series']);

    }
  }
  login() {
       this.authService.login(this.email, this.password);
       this.router.navigate(['/series']);
  }
  logout(){
    this.authService.logout();
  }

}