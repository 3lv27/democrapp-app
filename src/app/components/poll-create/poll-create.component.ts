import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent implements OnInit {

  feedbackEnabled = false;
  processing = false;
  question = null;
  answer = null;
  error: string;

  formOptions = [
    {
      text: null,
    },
    {
      text: null,
    }
  ];

  constructor(private pollService: PollService, private router: Router) { }

  ngOnInit() {
  }
  submitForm(theForm) {
    this.feedbackEnabled = true;
    if (theForm.valid) {
      this.processing = true;
      console.log('here we submit the form', theForm);
      // authService.login(this.username, this.password).

      const question = theForm.value.question;
      const options = this.tranformToArrayString(this.formOptions);
      const poll = {
        title: question,
        properties: {
          options
        }
      };

      this.pollService.createPoll(poll)
        .subscribe((data) => this.router.navigate(['/polls/', data.id ]), (err) => this.error = err );
    }
  }

  addOption() {
    const option = {
      text: null,
    };
    this.formOptions.unshift(option);
  }

  handleDelete(option) {
    this.formOptions.splice(this.formOptions.indexOf(option), 1);
  }

  private tranformToArrayString(arr) {
    return arr.map((elem) => {
      return elem.text;
    });
  }
}
