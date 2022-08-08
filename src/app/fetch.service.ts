import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {Card} from './card.model';
import {map} from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../app/main/status-bar/side-tab/dialog/dialog.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class FetchService implements OnInit {


  innerArray = [];

  service_dataSource = new MatTableDataSource<Card>();

  choosenId=0;
  flag=false;
  update_value=false;
  test=false;

  id_dom=0;
  dataSource;
  tabChange;
  start_date:Date =new Date(2019,6,16);
  end_date:Date =new Date(2022,6,21);

  Accessible=false;
  language='en';

  orange_theme=localStorage.getItem('0') ? (localStorage.getItem('0')=='orange') : false;


  local_storage_state = '';

  // start_date:Date =new Date(2018, 11, 24, 10, 33);
  // end_date:Date =new Date(2030,11,10,10,10);

  show_date_picker=true;


  //Arrays and buttons for filtering the views in nav-tabs
  published_surveyes: Card[];
  all_surveys: Card[];
  expired_surveyes: Card[];
  closed_surveyes: Card[];


  ///4 flags for viewing
  published_flag:boolean=true;
  expired_flag:boolean=false;
  closed_flag:boolean=false;
  all_flag:boolean=false;



  status: string;


  //Search name
  Search_name:string='';






  //if false it shows, if true it becomes disabled
  disable = true;

  //Var to store the current card, in order to recieve and manipulate data
  current_card?:Card;

  //Var to store the new name
  newName_service: string='';
  constructor(private http : HttpClient, public dialog:MatDialog) { }


  //Local Storage functions
  public SaveDate(key: string,value:string)
  {
    localStorage.setItem(key,value);
  }

  public getDate(key:string)
  {
    return localStorage.getItem(key);
  }

  ngOnInit(): void {
    // this.fetchPosts();
  }


 fetchPosts() {
    return this.http
      .get<Card>('https://mocki.io/v1/b2066c63-14f2-465a-a7d3-e15c2bfa63b4')
      .pipe(
        map((responseData:any) => {
          // console.log(responseData);
        const postsArray: any[]=[];;
        // for(const key in responseData)
        // {// To not access a property of a prototype

        //   if(responseData.hasOwnProperty(key)){
        //   postsArray.push(responseData[key]);
        // }

        // }
        return responseData[0].map((element:any) => {
         return {
          ...element,
          SurveyPeriods: JSON.parse(element.SurveyPeriods) ?? []
         }
        });

      }))

  }



  setcardId(card :Card)
  {
    this.choosenId = card.TEMPLATE_ID;
  }
  log()
  {
    console.log(this.choosenId);
  }

  dashboard_enable()
  {
    this.disable=false;
  }

  update()
    {
      this.update_value=!this.update_value;


    }

    domMan(id:string)
    {
      // this.element = document.getElementById(id)?.innerHTML?="d"
      // // this.element?.innerHTML?="Test";

    }



    //Go to dashboard button TypeScript

    display;

    Service_onPress() {
      var english = /^[A-Za-z0-9\s]*$/;
      //  this.display = true;
       /*if you want the component to show and hide on click pressed, use
       use this line
       this.display = !this.display;*/


       //This here affects my dialog

       const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',data: {name: 'test', animal: 'test2'},

      });
      dialogRef.afterClosed().subscribe(result =>{

        console.log('After closing');
        console.log(result);
        if(result.length>=4 &&english.test(result))
        {
          this.newName_service=result;
        }
        else
        {
          alert(`Please Enter a name that is :
           1-In english letters or numbers.
           2-At least 4 characters.`);
        }

        console.log(this.newName_service);
      }); }


    //   applyFilter(event: Event) {
    //     const filterValue = (event.target as HTMLInputElement).value;
    //     this.dataSource.filter = filterValue.trim().toLowerCase();
    //     // this.dataSource.filter = this.fetchService.Search_name.trim().toLowerCase();
    // }




    //Get the dataSource




}
