import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input() enableEditing: boolean;
  @Input() name: string;

  @Input() options: RadioOption[];

  @Input() select: any;
  @Output() selectChange = new EventEmitter<any>();

  trackByFn = (opt: RadioOption) => opt.label;

  constructor() {}

  ngOnInit(): void {}

  onChange(): void {
    this.selectChange.emit(this.select);
  }
}
