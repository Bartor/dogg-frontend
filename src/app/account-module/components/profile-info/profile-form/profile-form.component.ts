import { ClassMethod } from '@angular/compiler';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Sanitizer,
  SimpleChanges,
} from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  ACCOUNT_TYPES,
  ADMIN_ACCOUNT_TYPE,
} from 'src/app/config/account-types';
import { CONTACT_METHODS } from 'src/app/config/contact-methods';
import { RadioOption } from 'src/app/core/components/radio/radio.component';
import {
  Account,
  ContactMethod,
  ContactMethodDefinition,
} from 'src/app/core/types/account.class';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnChanges {
  @Input() enableEditing: boolean = false;
  @Input() account: Account;
  @Output() accountChange = new EventEmitter<Account>();

  selectedContactMethod = CONTACT_METHODS[0];

  availableContactMethods: RadioOption[] = CONTACT_METHODS.map((cm) => ({
    label: cm.methodIdentifier,
    value: cm,
  }));
  availableRoles: RadioOption[] = ACCOUNT_TYPES.filter((at) => !at.admin).map(
    (at) => ({
      label: at.typeIdentifier,
      value: at,
    })
  );
  trackByFn = (cm: ContactMethod) =>
    cm.visible + cm?.methodDefinition?.methodIdentifier + cm.methodValue;
  admin = false;
  trash = faTrash;

  onSubmit() {
    const newAccount = Account.copy(this.account);
    this.accountChange.emit(newAccount);
  }

  addNewContact(event) {
    event.preventDefault();
    this.account.concactMethods.push(
      new ContactMethod(this.selectedContactMethod, '')
    );
  }

  deleteContact(event, number) {
    event.preventDefault();
    this.account.concactMethods.splice(number, 1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.admin = this.account.accountType === ADMIN_ACCOUNT_TYPE;
  }
}
