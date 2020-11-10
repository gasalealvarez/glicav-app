import { Component, OnInit, ViewChild, ElementRef, Input  } from '@angular/core';
import {DataApiService} from '../../services/data-api.service'
import { razaInterface } from 'src/app/models/razaInterface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  constructor( public dataService: DataApiService ) { }
  @ViewChild('btnClose', null) btnClose: ElementRef;
  @Input() userUid: string;
  private breeds: razaInterface[];
  private isError: boolean= false;

  ngOnInit() {
    
    this.getAllBreeds();
  }

  onSaveBook(bookForm: NgForm): void{
   
        bookForm.value.userUid = this.userUid;
        console.log('studyModal...Edad .>' , bookForm.value.edad);
          
        this.dataService.addRegister(bookForm.value);
      
        bookForm.resetForm();
        
        //  // Este fue mi agregado por que no limpiaba el form cuando
        //  // se presiona nuevo libro.
      
        this.btnClose.nativeElement.click();
    
  }

  getAllBreeds(){
    this.dataService.getAllBreeds()
    .subscribe(breeds => {
      this.breeds = breeds;
    });    
  }
  
}
