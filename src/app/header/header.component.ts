import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {



  constructor( private fetchservice: FetchService,public translateService: TranslateService) { }

  ngOnInit(): void {
  }

  users =['Yaman Alashqar','Talha Alshafeey','Heba Basim'];
  test=[1,2,3,4];
  selected = 'option2';

  arr(){

    console.log(this.fetchservice.innerArray);
  }
  changeLanguage()
  {
    if(this.fetchservice.language=='ar')

    {
      this.fetchservice.language='en';
      localStorage.setItem('lang','en');

      // this.translateService.setDefaultLang('en');
      const lang = localStorage.getItem('lang') || 'en';
      this.translateService.use(lang);
      console.log(lang);
    document.documentElement.lang = lang;
    }
    else
    {
      this.fetchservice.language='ar';
      localStorage.setItem('lang','ar');

      const lang = localStorage.getItem('lang') || 'en';
      this.translateService.use(lang);
      console.log(lang);
      document.documentElement.lang = lang;
    }

  }
}

