import { Component, OnInit, ViewChild, ElementRef, Input  } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-raza',
  templateUrl: './modal-raza.component.html',
  styleUrls: ['./modal-raza.component.css']
})
export class ModalRazaComponent implements OnInit {
  @ViewChild('btnClose', null) btnClose: ElementRef;
  
  constructor(public dataService: DataApiService ) { }

  ngOnInit() {
  }

  onSaveBreed(breedForm: NgForm): void{
    console.log('Nueva raza  ---> ', breedForm.value);
    
  //  this.dataService.addBreed(breedForm.value);    
   breedForm.resetForm();
  
  //  // Este fue mi agregado por que no limpiaba el form cuando
  //  // se presiona nuevo libro.

  this.btnClose.nativeElement.click();
}

}
