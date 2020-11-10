import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  public app_name: string = 'Glicav';
  public isLogged: boolean = false;
  public isAdmin: any = null;
  public authuid: string = "";
  public enlaceAdmin: string;
  public enlaceUser: string;
  constructor(public authService: AuthService, public afsAuth: AngularFireAuth) {

   }

  ngOnInit() {
    this.getCurrentUser();
  }
  
  getCurrentUser(){
    this.authService.isAuth().subscribe( auth =>  {
      if(auth) {
        this.isLogged=true;
       
       
        this.authService.isUserAdmin(auth.uid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
        })
        
        this.authuid = auth.uid;
        this.enlaceAdmin = '/list-admin/' + this.authuid;
        this.enlaceUser = '/list-user/' + this.authuid;
        
      } else {
        this.isLogged=false;
      }
    })

  }
  onLogout(){
    this.afsAuth.auth.signOut();
  }

}
