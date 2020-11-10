import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// fireBase
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ForgotComponent } from './users/forgot/forgot.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import { ModalsComponent } from './components/modals/modals.component';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { ModalRazaComponent } from './components/modal-raza/modal-raza.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ListUserComponent,
    NavbarComponent,
    ModalsComponent,
    ListAdminComponent,
    ModalRazaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [ AngularFireAuth, AngularFirestore ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
