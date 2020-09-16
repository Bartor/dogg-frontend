import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FileUploader } from 'src/app/core/types/file-upload.type';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  fileUploadIcon = faFileUpload;

  @Input() profilePhoto: string;
  @Input() enableEditing: boolean;
  @Input() uploader: FileUploader;

  uploading = false;
  progress = 0;

  @ViewChild('fileInput', { static: false }) fileInputRef: ElementRef;

  constructor() {}

  onButtonClick() {
    if (!this.uploading) {
      this.fileInputRef.nativeElement.click();
    }
  }

  onFileError(error: Error) {}

  onFileChosen(files: FileList) {
    if (!this.uploading && this.enableEditing && files.length > 0) {
      this.uploading = true;

      this.uploader(files[0]).subscribe(
        (progress) => (this.progress = progress),
        (error) => {
          this.uploading = false;
          this.fileInputRef.nativeElement.value = '';
        },
        () => {
          this.uploading = false;
          this.fileInputRef.nativeElement.value = '';
        }
      );
    }
  }

  ngOnInit(): void {}
}
