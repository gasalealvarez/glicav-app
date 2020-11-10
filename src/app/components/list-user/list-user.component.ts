import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { NgForm } from '@angular/forms';
import { studyInterface } from 'src/app/models/study';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(public authService: AuthService, public dataService: DataApiService, public route : ActivatedRoute) { }
  private userUid: string;
  public studies : studyInterface[];

  ngOnInit() {
    this.getCurrentUser();
    const id = this.route.snapshot.params['id'];
   
    this.getListStudiesbyUser(id);
    
  }
        

  getCurrentUser(){
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          //  this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          // this.isAdmin= false;
        })
      }
    })
  }

    // getListStudies(){
    //   this.apiService.getAllStudies().subscribe (studies => {
    //     this.studies = studies;
    //   });
    // }

   getListStudiesbyUser(study: string){
     this.dataService.getRegistersByUser(study).subscribe ( studies => {
      this.studies= studies;
     });
  }

  onDeleteStudy(id : string) {
    const confirmacion= confirm('Are you sure?');
    if (confirmacion) {
      this.dataService.deleteRegister(id);
    }
  }

}
