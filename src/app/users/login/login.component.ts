import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string='';
  public password: string='';
  public isError:boolean=false;
  private id: Observable<UserInterface>;

  constructor(public router: Router, public authService: AuthService, private afsAuth: AngularFireAuth) { }
  private route : string;


  ngOnInit() {
    
  }

  onLogin():void {
    this.authService.loginEmailUser(this.email, this.password)
    .then(( res ) => {
      return this.afsAuth.auth.onAuthStateChanged((user) => {
        if (user) {
          // User logged in already or has just logged in.
          this.route = 'list-user/' + user.uid ;
         
          this.router.navigate([this.route]);
        } else {
          // User not logged in or has just logged out.
        }
      });
    }).catch(err => this.isError=true);
  }


 
 

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

}
