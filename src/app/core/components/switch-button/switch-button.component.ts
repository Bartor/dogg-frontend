import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss'],
})
export class SwitchButtonComponent implements OnInit {
  @Input() on: boolean;
  @Input() type: string;
  @Output() click = new EventEmitter<any>();

  id = uuid.v4();

  constructor() {}

  ngOnInit(): void {}

  onClick(event) {
    this.click.emit(event);
  }
}
