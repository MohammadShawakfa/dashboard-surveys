import { ChangeDetectorRef,Component, OnInit,Input,AfterViewInit,ViewChild } from '@angular/core';
import { Card } from 'src/app/card.model';
import { FetchService } from '../../fetch.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
// import { ToastrService } from 'ngx-toastr';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],

})
export class CardListComponent implements OnInit {

  constructor(public fetchService: FetchService, private cdr:ChangeDetectorRef, private toast:NgToastService,private toastr: ToastrService, private translateService : TranslateService) {
    // this.dataSource = new MatTableDataSource(this.fetchedPosts);
    // this.toastr.success('Hello world!', 'Toastr fun!');

    // this.toast.success({detail:"Success message",summary:"pepsi",duration:5000});
   }
  //  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //  @ViewChild(MatSort) sort: MatSort;

  //  dataSource: MatTableDataSource<Card>;

   //FetchedPosts contains an array of 91 object , i can make the fetched posts the dataSource
  fetchedPosts:any=this.fetchService.innerArray;
  currentid:number=0;
  class_value:string='grid';
  class_test: string='test';

  //Edit the displayedCoulmns and the data in the array, to include both the icon and radio button

  displayedColumns: string[] = ['Radio','Icon','SurveyName', 'From', 'To', 'Period'];


  // @Input() s:any=this.fetchService.innerArray;
  // @Input() test:string='test';
  clickedRows = new Set<Card>();
  selectedRow;


  ngAfterViewInit() {

  }


  source: Card[];


  ngOnInit(): void {
    this.fetchService.fetchPosts().subscribe((posts) => {
      this.fetchService.innerArray = posts;
      this.fetchedPosts=posts;
      console.log(this.fetchedPosts);

      // console.log("debugging");

      // console.log(this.fetchedPosts[0].SurveyPeriods[0].ID);

});

}
// sortData(sort: Sort) { this.listData.sort = this.sort; }
  addId(post: Card)
  {
    // console.log('This is post id ');
    // console.log(post.TEMPLATE_ID);

    this.fetchService.choosenId = post.TEMPLATE_ID;
    //New try
    this.currentid= post.TEMPLATE_ID;
    this.fetchService.flag = !this.fetchService.flag;


  }

  grid()
  {
    this.class_value='grid';
    this.toastr.success(this.translateService.instant('Grid'), this.translateService.instant('Success'));
    // this.toast.success({detail:"Success message",summary:"Grid View",duration:5000});


  }
  list()
  {
    this.class_value='list';
    this.toast.success({detail:this.translateService.instant('Success'),summary:this.translateService.instant('List'),duration:5000});
  }

  toast_fun(){

    this.toast.success({detail:this.translateService.instant('Success'),summary:"Hello I am Toast!",duration:5000});

  }





  ///Mat table
  radioSelected(value:number){
    this.fetchService.disable=false;
    console.log(value);
    this.fetchService.choosenId=value;
  }

  validate()
  {

      console.log("I am in validate");

      console.log(this.fetchService.start_date);

      if(this.fetchService.start_date > this.fetchService.end_date)
      {
        console.log("Start is bigger");
      }
      if(this.fetchService.start_date < this.fetchService.end_date)
      {
        console.log("Start is smaller");
      }

  }
}



//From angular material



