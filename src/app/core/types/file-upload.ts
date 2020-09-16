import { Observable } from 'rxjs';

export type FileUpload = (file: File) => Observable<number>;

export enum FileUploadState {
  IDLE,
  IN_PROGRESS,
  ERROR,
  DONE,
}

export class FileUploader {
  public progress: number = 0;
  public state: FileUploadState = FileUploadState.IDLE;

  constructor(private fileUpload: FileUpload) {}

  uploadFile(file: File) {
    this.state = FileUploadState.IN_PROGRESS;
    this.progress = 0;
    this.fileUpload(file).subscribe(
      (progress) => {
        this.progress = progress;
      },
      (error) => {
        this.state = FileUploadState.ERROR;
        this.progress = 0;
      },
      () => {
        this.state = FileUploadState.DONE;
        this.progress = 0;
      }
    );
  }
}
