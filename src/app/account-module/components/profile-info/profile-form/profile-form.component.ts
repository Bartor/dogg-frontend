import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from 'src/app/core/types/account.type';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent {
  @Input() enableEditing: boolean = false;
  @Input() account: Account;
  @Output() accountChange = new EventEmitter<Account>();

  constructor() {}

  onSubmit() {
    this.accountChange.emit(this.account);
  }
}
