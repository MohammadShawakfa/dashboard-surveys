import { Component, OnInit,ViewChild } from '@angular/core';
import { FetchService } from 'src/app/fetch.service';
import { Card } from 'src/app/card.model';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-navigation-tabs',
  templateUrl: './navigation-tabs.component.html',
  styleUrls: ['./navigation-tabs.component.css']
})
export class NavigationTabsComponent implements OnInit {
  constructor(public fetchService: FetchService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;








  posts_to_display: Card[];
  ngOnInit(): void {


    this.fetchService.fetchPosts().subscribe((posts) => {
      this.fetchService.innerArray = posts;
      this.posts_to_display=posts;
      // console.log("posts_to_display");
      // console.log(this.posts_to_display);

      this.fetchService.published_surveyes=this.posts_to_display.filter(post=>{
        return post.SURVEY_STATUS_EN=='Published';
      })
      this.fetchService.expired_surveyes=this.posts_to_display.filter(post=>{
        return post.SURVEY_STATUS_EN=='Expired';
      })
      this.fetchService.closed_surveyes=this.posts_to_display.filter(post=>{
        return post.SURVEY_STATUS_EN=='Closed';
      })

      this.fetchService.all_surveys=this.posts_to_display;




      console.log(this.fetchService.published_surveyes);
      console.log(this.fetchService.expired_surveyes);
      console.log(this.fetchService.closed_surveyes);
      console.log("All");
      console.log(this.posts_to_display);
});



  }


  test()
  {
    console.log("Test works");
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    // console.log('tabChangeEvent => ', tabChangeEvent);
    // console.log('index => ', tabChangeEvent.index);


    this.fetchService.tabChange =tabChangeEvent.index ;
    let x = this.fetchService.tabChange;
  switch (x) {
  case 0:
    this.fetchService.published_flag=true;
    this.fetchService.expired_flag=false;
    this.fetchService.closed_flag=false;
    this.fetchService.all_flag=false;
    break;
  case 1:
    this.fetchService.published_flag=false;
    this.fetchService.expired_flag=true;
    this.fetchService.closed_flag=false;
    this.fetchService.all_flag=false;
    // this.fetchService.service_dataSource.data = this.fetchService.expired_surveyes;
    // this.fetchService.service_dataSource.sort = this.sort;
    // this.fetchService.service_dataSource.paginator=this.paginator;
    // this.ExpiredSource.sort = this.sort;
    // this.ExpiredSource.paginator=this.paginator;
    break;
  case 2:
    this.fetchService.published_flag=false;
    this.fetchService.expired_flag=false;
    this.fetchService.closed_flag=true;
    this.fetchService.all_flag=false;
    break;
  case 3:
    this.fetchService.published_flag=false;
    this.fetchService.expired_flag=false;
    this.fetchService.closed_flag=false;
    this.fetchService.all_flag=true;
    break;
}

// console.log(this.fetchService.status);


  }

}
