import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/core/types/account.type';
import { FileUploader } from 'src/app/core/types/file-upload.type';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
})
export class ProfileInfoComponent implements OnInit {
  account: Account;
  editing: boolean = false;
  uploader: FileUploader;

  constructor(private accountService: AccountService) {
    accountService.account.subscribe((acc) => (this.account = acc));
    this.uploader = new FileUploader((file: File) =>
      accountService.uploadAvatar(file)
    );
  }

  onAccountFormUpdate(account) {
    console.log(account);
    this.editing = false;
  }

  click(event) {
    if (this.editing === false) {
      event.preventDefault();
      this.editing = true;
    }
  }

  ngOnInit(): void {}
}
