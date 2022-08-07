import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FetchService } from '../../../fetch.service';
import { DialogComponent } from './dialog/dialog.component';
import {FormGroup, FormControl} from '@angular/forms';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-side-tab',
  templateUrl: './side-tab.component.html',
  styleUrls: ['./side-tab.component.css'],

})
export class SideTabComponent implements OnInit {

  constructor(public fetchService: FetchService,public dialog: MatDialog)
  {}

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',data: {name: 'test', animal: 'test2'},

  //   });}

  //Toggle TS
  handleChange(){}
  ngOnInit(): void {}

  display = false;
  checked = true;

  grid()
  {

  }
  list()
  {

  }
 onPress() {
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
      this.fetchService.newName_service=result;
    }
    else
    {
      alert(`Please Enter a name that is :
       1-In english letters or numbers.
       2-At least 4 characters.`);
    }

    console.log(this.fetchService.newName_service);
  });


//   this.dialogRef.afterClosed().subscribe(result => {
//     //     console.log('The dialog was closed');
//     //     this.fetchservice.newName_service = result;
//     //   });
//  }




}


//For datePickers

campaignOne = new FormGroup({
  start: new FormControl(new Date(year, month, 13)),
  end: new FormControl(new Date(year, month, 16)),
});


campaignTwo = new FormGroup({
  start: new FormControl(new Date(year, month, 15)),
  end: new FormControl(new Date(year, month, 19)),
});



showDate()
{
  this.fetchService.show_date_picker= !this.fetchService.show_date_picker;

}

 }
