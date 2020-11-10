import { Component, OnInit } from '@angular/core';
import {  AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService : AuthService, private router: Router, private afsAuth: AngularFireAuth ){}
  public email: string= '';
  public password: string='';
  public isError:boolean= false;
  private route : string;
  ngOnInit() {
  }
  onAddUser() {    
    this.authService.registerUser(this.email, this.password)
       .then( res => {
        return this.afsAuth.auth.onAuthStateChanged((user) => {
          if (user) {
            // User logged in already or has just logged in.
            this.route = 'list-user/' + user.uid ;
            console.log('uid', this.route);
            this.router.navigate([this.route]);
          } else {
            // User not logged in or has just logged out.
          }
        });
       }).catch(err => console.log('Err', this.isError=true));
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
    this.isError = false;
    }, 4000);
  }
}
