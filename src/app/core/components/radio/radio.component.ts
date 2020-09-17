import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as uuid from 'uuid';

export interface RadioOption {
  label: string;
  value: any;
}

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  trackByFn = (opt: RadioOption) => opt.label;
  name = uuid.v4();

  @Input() options: RadioOption[];

  @Input() select: RadioOption;
  @Input() selectChange = new EventEmitter<RadioOption>();

  selected = 0;

  constructor() {}

  ngOnInit(): void {
    this.selected = this.options.findIndex((o) => o === this.select);
  }

  onChange(event) {
    console.log(event.target.value);
  }
}
