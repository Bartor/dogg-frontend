import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss'],
})
export class SwitchButtonComponent {
  @Input() value: boolean;
  @Output() valueChange = new EventEmitter<boolean>();

  @Input() enableEditing: boolean = true;
  @Input() on: boolean;
  @Input() type: string;
  @Output() click = new EventEmitter<any>();

  id = uuid.v4();

  onClick(event) {
    this.click.emit(event);
  }

  onChange(event) {
    this.valueChange.emit(event.target.checked);
  }
}
