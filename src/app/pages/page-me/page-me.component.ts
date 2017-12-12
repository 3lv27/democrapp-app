import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-page-me',
  templateUrl: './page-me.component.html',
  styleUrls: ['./page-me.component.css']
})
export class PageMeComponent implements OnInit {

  myPolls: object = [];
  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.pollService.getOwnersPoll()
     .subscribe(data => this.myPolls = data);
  }

}
