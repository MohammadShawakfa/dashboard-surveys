import { AfterViewInit, Component, ViewChild,ChangeDetectorRef,AfterViewChecked } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Card } from '../card.model';
import { FetchService } from '../fetch.service';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';
import {Sort} from '@angular/material/sort';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {

  //Commented from stackOverFlow
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  dataSource  = new MatTableDataSource([]);

  publishedSource= new MatTableDataSource([]);
  expiredSource = new MatTableDataSource([]);
  allSource = new MatTableDataSource([]);


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns: string[] = ['Radio','Icon','SurveyName', 'From', 'To', 'Period'];
  displayedColumns: string[] = ['Radio','Icon','SurveyName','START_DATE', 'END_DATE', 'Period'];
  selectedRow;
  Async_test:boolean =false;
  fetchedPosts:any=this.fetchService.innerArray;

  constructor(public fetchService:FetchService,private cdr:ChangeDetectorRef) {

    fetchService.fetchPosts();



    console.log("this is the dataSource");
    console.log(this.dataSource);




    //Log to check if it gets empty data
    console.log(fetchService.innerArray);
    // console.log(this.dataSource.data = fetchService.innerArray);
  }


  ngAfterViewInit(): void {
    this.fetchService.fetchPosts().subscribe((posts) => {
      this.dataSource = new MatTableDataSource<Card>(posts);
      console.log("This is the data source");
      console.log(this.dataSource);

      this.publishedSource.data = this.fetchService.published_surveyes;
      this.expiredSource.data = this.fetchService.expired_surveyes;
      this.allSource.data =this.fetchService.all_surveys;
      // this.datasource = new MatTableDataSource<QRCodeDefinitionInfoApi>(this.source);
      // this.cdr.detectChanges();
      console.log('Before Sort');
      console.log('Logging the sort');
      this.dataSource.sort = this.sort;
      this.expiredSource.sort = this.sort;
      this.publishedSource.sort = this.sort;
      console.log(this.sort);

      // this.fetchService.service_dataSource=new MatTableDataSource<Card>(posts);

      this.dataSource.paginator = this.paginator;
      console.log("expired paginator value");
      this.expiredSource.paginator = this.paginator;
      console.log(this.expiredSource.paginator);

      this.publishedSource.paginator=this.paginator;
      this.Async_test=true;
      //Angular example 27/7
      // this.sortedData = this.fetchedPosts.slice();

      this.dataSource.filter = this.fetchService.Search_name.trim().toLowerCase();
      this.publishedSource.filter = this.fetchService.Search_name.trim().toLowerCase();
      this.expiredSource.filter = this.fetchService.Search_name.trim().toLowerCase();


      //Here to see effect

      // this.dataSource.data=this.fetchService.published_surveyes;


      // published_flag:boolean=true;
      // expired_flag:boolean=false;
      // closed_flag:boolean=false;
      // all_flag:boolean=false;

//       let x = this.fetchService.tabChange;
//   switch (x) {
//   case 0:
//     this.fetchService.published_flag=true;
//     this.fetchService.expired_flag=false;
//     this.fetchService.closed_flag=false;
//     this.fetchService.all_flag=false;
//     this.dataSource.data=this.fetchService.published_surveyes;
//     break;
//   case 1:
//     this.fetchService.published_flag=false;
//     this.fetchService.expired_flag=true;
//     this.fetchService.closed_flag=false;
//     this.fetchService.all_flag=false;
//     this.dataSource.data=this.fetchService.expired_surveyes;
//     break;
//   case 2:
//     this.fetchService.published_flag=false;
//     this.fetchService.expired_flag=false;
//     this.fetchService.closed_flag=true;
//     this.fetchService.all_flag=false;
//     this.dataSource.data=this.fetchService.closed_surveyes;
//     break;
//   case 3:
//     this.fetchService.published_flag=false;
//     this.fetchService.expired_flag=false;
//     this.fetchService.closed_flag=false;
//     this.fetchService.all_flag=true;
//     this.dataSource = new MatTableDataSource<Card>(posts);
//     break;
// }




});

// this.dataSource.data=this.fetchService.published_surveyes;
console.log("consoling the dataSource");
console.log(this.dataSource);

// this.dataSource.data=this.fetchService.published_surveyes;

  }

  // ngAfterViewChecked() {
  //   console.log("pepsi");
  // }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//     // this.dataSource.filter = this.fetchService.Search_name.trim().toLowerCase();
// }
  applyFilter() {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = this.fetchService.Search_name.trim().toLowerCase();
    // this.dataSource.filter = this.fetchService.Search_name.trim().toLowerCase();
}


onChange_test()
{

  let x = this.fetchService.tabChange;
  switch (x) {
  case 0:
    this.fetchService.published_flag=true;
    this.fetchService.expired_flag=false;
    this.fetchService.closed_flag=false;
    this.fetchService.all_flag=false;
    // this.dataSource.data=this.fetchService.published_surveyes;
    this.publishedSource.paginator = this.paginator;
    break;
  case 1:
    this.fetchService.published_flag=false;
    this.fetchService.expired_flag=true;
    this.fetchService.closed_flag=false;
    this.fetchService.all_flag=false;
    this.dataSource.data=this.fetchService.expired_surveyes;
    break;
  case 2:
    this.fetchService.published_flag=false;
    this.fetchService.expired_flag=false;
    this.fetchService.closed_flag=true;
    this.fetchService.all_flag=false;
    this.dataSource.data=this.fetchService.closed_surveyes;
    break;
  case 3:
    this.fetchService.published_flag=false;
    this.fetchService.expired_flag=false;
    this.fetchService.closed_flag=false;
    this.fetchService.all_flag=true;
    // this.dataSource = new MatTableDataSource<Card>(posts);
    break;
}

}

  radioSelected(value:number){
    this.fetchService.disable=false;
    console.log(value);
    this.fetchService.choosenId=value;
  }

  logDataSource()
  {
    console.log(this.dataSource);
  }



  //Angular example



  //https://material.angular.io/components/sort/overview'

  sortedData: Card[];
  //add this in the constructor this.sortedData = this.desserts.slice();
  sortData(sort: Sort)
  {


    //To be implemented
  }




}
