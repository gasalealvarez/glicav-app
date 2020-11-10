import { Component, OnInit,  ElementRef, ViewChild } from '@angular/core';
import { studyInterface } from 'src/app/models/study';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataApiService } from 'src/app/services/data-api.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;  
  title = 'Excel'; 

  constructor(private apiService: DataApiService) { }
  public studies : studyInterface[];


  ngOnInit() {
    this.getListStudies();
  }

  getListStudies(){
   this.apiService.getAllStudies().subscribe (studies => {
   this.studies = studies;
   });
   
  }

  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');  
  }  
}
