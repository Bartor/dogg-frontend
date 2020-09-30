import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FileUploader, FileUploadState } from 'src/app/core/types/file-upload';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  fileUploadIcon = faFileUpload;
  fus = FileUploadState;

  @Input() profilePhoto: string;
  @Input() enableEditing: boolean;
  @Input() uploader: FileUploader;

  @ViewChild('fileInput', { static: false }) fileInputRef: ElementRef;

  constructor() {}

  onButtonClick() {
    if (this.uploader.state !== FileUploadState.IN_PROGRESS) {
      this.fileInputRef.nativeElement.click();
    }
  }

  onFileError(error: Error) {}

  onFileChosen(files: FileList) {
    if (
      this.uploader.state !== FileUploadState.IN_PROGRESS &&
      this.enableEditing &&
      files.length > 0
    ) {
      this.uploader.uploadFile(files[0]);
    }
  }

  ngOnInit(): void {}
}
