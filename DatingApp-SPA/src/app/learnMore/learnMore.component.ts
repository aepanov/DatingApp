import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-learnMore',
  templateUrl: './learnMore.component.html',
  styleUrls: ['./learnMore.component.css']
})
export class LearnMoreComponent implements OnInit {
  @Output() cancelLearnMore = new EventEmitter();
  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  cancel() {
    this.cancelLearnMore.emit(false);
  }
}
