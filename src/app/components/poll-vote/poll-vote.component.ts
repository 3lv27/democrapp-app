import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.css']
})
export class PollVoteComponent implements OnInit {

  @Input() poll: any;
  @Output() submitVote = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  onVote(answer: number) {
    this.submitVote.emit(answer);
  }

}
