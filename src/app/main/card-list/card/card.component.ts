import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { FetchService } from '../../../fetch.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, AfterViewInit {
  constructor(public fetchService: FetchService) {
    // console.log(this.fetchService.choosenId , '--------')
  }

  //pepsi;
  myVar = true;

  card_view=true;

  //Get a demo card which its id = 27074 "The first card"

  // Store the ID and emit its value to the parent
  @Output() selected_id = new EventEmitter<number>();
  //Fetch only the post from the card-list not the whole array, for
  //e.g i wanna show only one card, so make the card component only fetches one card and show it
  @Input() post: any = this.fetchService.innerArray;
  //  post: any = this.fetchService.innerArray;

  ngOnInit(): void {}

  ngAfterViewInit()
   {

    let x =this.post.SURVEY_STATUS_EN ;
    if(x=='Published')
    {
      this.card_view=false;
    }

   }

  onSelect() {
    //Change the style of selected card
    // this.selected=this.post.TEMPLATE_ID;
    //log the selected card
    console.log(this.post);

    //Store the current card
    this.fetchService.current_card = this.post;

    this.selected_id.emit(this.fetchService.choosenId);

    //change the flag to make it dynamic by using ! insted of a function call

    this.fetchService.disable = !this.fetchService.disable;
  }
}
