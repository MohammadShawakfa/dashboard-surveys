import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { FetchService } from 'src/app/fetch.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {Sort} from '@angular/material/sort';


@Component({
  selector: 'app-expired',
  templateUrl: './expired.component.html',
  styleUrls: ['./expired.component.css']
})
export class ExpiredComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ExpiredSource= new MatTableDataSource([]);
  displayedColumns: string[] = ['Radio','Icon','SurveyName','START_DATE', 'END_DATE', 'Period'];
  selectedRow;

  constructor(public fetchService : FetchService) { }

  ngAfterViewInit(): void

  {
    this.ExpiredSource.data = this.fetchService.expired_surveyes;
    this.ExpiredSource.sort = this.sort;
    this.ExpiredSource.paginator=this.paginator;
    this.ExpiredSource.filter = this.fetchService.Search_name.trim().toLowerCase();
  }

  radioSelected(value:number){
    this.fetchService.disable=false;
    console.log(value);
    this.fetchService.choosenId=value;
  }



}
