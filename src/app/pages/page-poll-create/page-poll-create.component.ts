import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-page-poll-create',
  templateUrl: './page-poll-create.component.html',
  styleUrls: ['./page-poll-create.component.css']
})
export class PagePollCreateComponent implements OnInit {
  feedbackEnabled = false;
  processing = false;
  question = null;
  answer = null;

  formOptions = [];

  constructor(private pollService: PollService) { }

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
        .subscribe(data => console.log(data));
    }
  }

  addOption() {
    const option = {
      text: null,
    };
    this.formOptions.push(option);
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
