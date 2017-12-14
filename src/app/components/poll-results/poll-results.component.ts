import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.css']
})
export class PollResultsComponent implements OnInit {

  @Input() poll: any;
  votes = [];
  percentages = [];

  constructor() { }

  ngOnInit() {
    this.poll.properties.options.forEach((answer, index) => {
      this.votes[index] = 0;
    });
    this.poll.votes.forEach(vote => {
      this.votes[vote.answer]++;
    });
    this.poll.properties.options.forEach((answer, index) => {
      this.percentages[index] = Math.round(this.votes[index] * 100 / this.poll.votes.length);
    });
  }

}
