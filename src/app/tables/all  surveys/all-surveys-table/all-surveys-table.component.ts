import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { FetchService } from 'src/app/fetch.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {Sort} from '@angular/material/sort';


@Component({
  selector: 'app-all-surveys-table',
  templateUrl: './all-surveys-table.component.html',
  styleUrls: ['./all-surveys-table.component.css']
})
export class AllSurveysTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  AllSource= new MatTableDataSource([]);
  displayedColumns: string[] = ['Radio','Icon','SurveyName','START_DATE', 'END_DATE', 'Period'];
  selectedRow;

  constructor(public fetchService : FetchService) { }

  ngAfterViewInit(): void

  {
    this.AllSource.data = this.fetchService.all_surveys;
    this.AllSource.sort = this.sort;
    this.AllSource.paginator=this.paginator;
    this.AllSource.filter = this.fetchService.Search_name.trim().toLowerCase();
  }
  radioSelected(value:number){
    this.fetchService.disable=false;
    console.log(value);
    this.fetchService.choosenId=value;
  }

}
