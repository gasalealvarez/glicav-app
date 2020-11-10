import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private afsAuth: AngularFireAuth, public router: Router) { }
  private route : string;

  ngOnInit() {
    this.isLogged();
  }
  isLogged() {
    this.afsAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        this.route = 'list-user/' + user.uid ;
       
        this.router.navigate([this.route]);
      } else {
        // User not logged in or has just logged out.
        this.router.navigate(['user/login']);
      }
    });
  }
  

}
