import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FetchService } from 'src/app/fetch.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  newName: string ='';
  name: string='';
  dialogRef?: MatDialogRef<DialogComponent,any>
  update_value:boolean=false;

  //
  test_input_name='';




  constructor(public dialog: MatDialog, public fetchservice:FetchService) { }
  // public dialogRef: MatDialogRef<YourDialog>





  ngOnInit(): void {

  }

  // openDialog(): void {

  //    this.dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',data: {name: 'test', animal: 'test2'},

  //   });

  //   this.dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.fetchservice.newName_service = result;
  //   });

  //   // let dialogRef =this.dialog.open(DialogComponent);

  //   // dialogRef.afterClosed().subscribe(result => {

  //   //   console.log(`dialog result: ${result}`);


  //   // });
  // }

    onNoClick()
    {
      // this.dialogRef?.close();

    }


    // // //////////////////////////////////
    // /
    // //
    // /
    // /
    // /
    // /
    // /
    // /






}
