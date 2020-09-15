import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  fileUploadIcon = faFileUpload;

  avatarImageUri: string = '';
  uploading = false;
  progress = 0;

  @ViewChild('fileInput', { static: false }) fileInputRef: ElementRef;

  constructor(private accountService: AccountService) {
    accountService.account.subscribe(
      (acc) => (this.avatarImageUri = acc.avatarUri)
    );
  }

  onButtonClick() {
    if (!this.uploading) {
      this.fileInputRef.nativeElement.click();
    }
  }

  onFileError(error: Error) {}

  onFileChosen(files: FileList) {
    if (!this.uploading && files.length > 0) {
      this.uploading = true;

      this.accountService.uploadAvatar(files[0]).subscribe(
        (event) => {
          this.progress = event;
        },
        (error) => {
          console.error(error);

          this.fileInputRef.nativeElement.value = '';
          this.uploading = false;
          this.progress = 0;
        },
        () => {
          this.fileInputRef.nativeElement.value = '';
          this.uploading = false;
          this.progress = 0;
        }
      );
    }
  }

  ngOnInit(): void {}
}
