import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';
import { HttpClient } from '@angular/common/http';
import { FetchService } from './fetch.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'task1-restruct';

  constructor(
    private http: HttpClient,public fetchService: FetchService,public translateService: TranslateService)
  {
    // this.translateService.setDefaultLang('en');
    // const lang = localStorage.getItem('lang') || 'en';
    // this.translateService.use(lang);
    // console.log(lang);
    // document.documentElement.lang = lang;
  }

  ngOnInit() {
    // this.fetchPosts();
  }
}
