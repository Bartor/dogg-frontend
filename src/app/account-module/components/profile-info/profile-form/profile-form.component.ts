import { ClassMethod } from '@angular/compiler';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Sanitizer,
} from '@angular/core';
import { CONTACT_METHODS } from 'src/app/config/contact-methods';
import {
  Account,
  AccountType,
  ContactMethod,
} from 'src/app/core/types/account.class';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {
  @Input() enableEditing: boolean = false;
  @Input() account: Account;
  @Output() accountChange = new EventEmitter<Account>();

  helper: boolean;
  trackByFn = (cm: ContactMethod) =>
    cm.visible + cm?.methodDefinition?.methodIdentifier + cm.methodValue;

  constructor() {}

  ngOnInit() {
    this.helper = this.account.accountType === AccountType.HELPER;
  }

  onSubmit() {
    const newAccount = Account.copy(this.account);
    if (newAccount.accountType === AccountType.ATTENDEE && this.helper) {
      newAccount.accountType = AccountType.HELPER;
    }
    if (newAccount.accountType === AccountType.HELPER && !this.helper) {
      newAccount.accountType = AccountType.ATTENDEE;
    }
    this.accountChange.emit(newAccount);
  }

  addNewContact(event) {
    event.preventDefault();
    this.account.concactMethods.push(new ContactMethod(CONTACT_METHODS[0], ''));
  }

  deleteContact(event, number) {
    event.preventDefault();
    this.account.concactMethods.splice(number, 1);
  }
}
