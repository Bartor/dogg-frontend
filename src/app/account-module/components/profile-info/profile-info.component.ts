import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Account } from 'src/app/core/types/account.type';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
})
export class ProfileInfoComponent implements OnInit {
  account: Account;
  lastAccount: Account;
  editing: boolean = false;
  saving: boolean = false;

  formControl = new FormControl();

  constructor(private accountService: AccountService) {
    accountService.account.subscribe((acc) => {
      this.account = acc;
      this.lastAccount = acc;
    });
  }

  enableEditing(event) {
    event.preventDefault();
    this.account = { ...this.lastAccount };
    this.editing = true;
  }

  discardEdit(event) {
    event.preventDefault();
    this.account = this.lastAccount;
    this.editing = false;
  }

  saveEdit() {
    this.editing = false;
  }

  onFormSubmit(event) {
    console.log(event);
  }

  ngOnInit(): void {}
}
