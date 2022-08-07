import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public fetchService:FetchService) { }

  isTrue : boolean =false;



  ngOnInit(): void {
  }

  onAccess()
  {
    this.fetchService.Accessible=!this.fetchService.Accessible;

  }

  onTheme()
  {
    this.fetchService.orange_theme=!this.fetchService.orange_theme;
    // this.isTrue=!this.isTrue;
    if(this.fetchService.orange_theme==true)
    {
      this.fetchService.SaveDate('0','orange');

    }
    else
    {
      this.fetchService.SaveDate('0','green');
    }

    this.fetchService.local_storage_state = this.fetchService.getDate('0');
    console.log(this.fetchService.local_storage_state);

  }

}
