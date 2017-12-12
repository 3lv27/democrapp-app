import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-poll-card',
  templateUrl: './poll-card.component.html',
  styleUrls: ['./poll-card.component.css']
})
export class PollCardComponent implements OnInit {

    pollData: any;
    id: any;
  constructor(private pollService: PollService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.idPoll();
    this.getPoll();
    console.log(this.id);
  }

  getPoll() {
    this.pollService.getPoll(this.id)
      .subscribe((data) => this.pollData = data );
  }

  idPoll() {
    this.activatedRoute.params
      .subscribe( params => {
        this.id = params['id'];
      });
  }

}
