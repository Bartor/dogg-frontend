import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editable-field',
  templateUrl: './editable-field.component.html',
  styleUrls: ['./editable-field.component.scss'],
})
export class EditableFieldComponent {
  @Input() type: string = 'text';
  @Input() labelText: string = '';
  @Input() placeholder: string = '';
  @Input() enabled: boolean = false;
  @Input() required: boolean = false;

  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  constructor() {}

  onValueChange(newValue) {
    this.valueChange.emit(newValue);
  }
}
