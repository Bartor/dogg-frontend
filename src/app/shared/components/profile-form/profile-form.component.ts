import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  ACCOUNT_TYPES,
  ADMIN_ACCOUNT_TYPE,
} from 'src/app/config/account-types';
import { CONTACT_METHODS } from 'src/app/config/contact-methods';
import {
  Account,
  ContactMethod,
  ContactMethodDefinition,
} from 'src/app/core/types/account.class';
import { RadioOption } from '../radio/radio.component';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnChanges {
  admin = false;
  trash = faTrash;
  plus = faPlus;
  @Input() enableEditing = false;
  @Input() account: Account;
  @Output() accountChange = new EventEmitter<Account>();

  availableContactMethods = CONTACT_METHODS;
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

  addNewContact(method: ContactMethodDefinition) {
    event.preventDefault();
    this.account.concactMethods.push(new ContactMethod(method, ''));
  }

  deleteContact(event, number) {
    event.preventDefault();
    this.account.concactMethods.splice(number, 1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.admin = this.account.accountType === ADMIN_ACCOUNT_TYPE;
  }
}
