import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PollService } from '../../services/poll.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-page-poll-detail',
  templateUrl: './page-poll-detail.component.html',
  styleUrls: ['./page-poll-detail.component.css']
})
export class PagePollDetailComponent implements OnInit {

  user = null;
  id: any;
  userAlreadyVoted = false;
  poll: any;
  error: string;

  constructor(
    private pollService: PollService, 
    private authService: AuthService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {

    this.user = this.authService.getUser();

    this.activatedRoute.params
      .subscribe(params => {
        this.id = params['id'];
        this.pollService.getPoll(this.id)
          .subscribe((data) => {
            this.poll = data;
            this.userAlreadyVoted = this.poll.voters.indexOf(this.user._id) !== -1;
          });
      });
  }

  handleVote(answer: number) {
    this.pollService.submitVote(this.poll._id, answer)
      .subscribe(
      () => { this.userAlreadyVoted = true; },
      (err) => this.error = err.json().error
      );
  }

}
