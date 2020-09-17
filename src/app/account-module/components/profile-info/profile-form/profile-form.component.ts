import { ClassMethod } from '@angular/compiler';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Sanitizer,
} from '@angular/core';
import { ACCOUNT_TYPES } from 'src/app/config/account-types';
import { CONTACT_METHODS } from 'src/app/config/contact-methods';
import { RadioOption } from 'src/app/core/components/radio/radio.component';
import { Account, ContactMethod } from 'src/app/core/types/account.class';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent {
  @Input() enableEditing: boolean = false;
  @Input() account: Account;
  @Output() accountChange = new EventEmitter<Account>();

  availableRoles: RadioOption[] = ACCOUNT_TYPES.filter((at) => !at.admin).map(
    (at) => ({
      label: at.typeIdentifier,
      value: at,
    })
  );
  trackByFn = (cm: ContactMethod) =>
    cm.visible + cm?.methodDefinition?.methodIdentifier + cm.methodValue;

  onSubmit() {
    const newAccount = Account.copy(this.account);
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
