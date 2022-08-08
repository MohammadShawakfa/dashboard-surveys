import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { FetchService } from 'src/app/fetch.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {Sort} from '@angular/material/sort';


@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css']
})
export class PublishedComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  publishedSource= new MatTableDataSource([]);
  displayedColumns: string[] = ['Radio','Icon','SurveyName','START_DATE', 'END_DATE', 'Period'];
  selectedRow;





  constructor(public fetchService : FetchService) { }

  ngAfterViewInit(): void

  {
    this.publishedSource.data = this.fetchService.published_surveyes;
    this.publishedSource.sort = this.sort;
    this.publishedSource.paginator=this.paginator;
    this.publishedSource.filter = this.fetchService.Search_name.trim().toLowerCase();

  }
  radioSelected(value:number){
    this.fetchService.disable=false;
    console.log(value);
    this.fetchService.choosenId=value;
  }

}
