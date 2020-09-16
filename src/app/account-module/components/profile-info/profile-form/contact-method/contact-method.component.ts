import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactMethod } from 'src/app/core/types/account.class';

@Component({
  selector: 'app-contact-method',
  templateUrl: './contact-method.component.html',
  styleUrls: ['./contact-method.component.scss'],
})
export class ContactMethodComponent implements OnInit {
  @Input() enableEditing: boolean = true;

  @Input() contactMethod: ContactMethod;
  @Output() contactMethodChange = new EventEmitter<ContactMethod>();

  constructor() {}

  ngOnInit(): void {}

  onContactChage() {
    console.log(this.contactMethod);
    this.contactMethodChange.emit(this.contactMethod);
  }
}
