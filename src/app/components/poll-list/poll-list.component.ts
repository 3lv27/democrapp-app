import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {

  polls = null;
  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.pollService.getPollList()
      .subscribe(data => this.polls = data);
  }
}
