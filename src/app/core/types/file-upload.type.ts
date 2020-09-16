import { Observable } from 'rxjs';

export type FileUpload = (file: File) => Observable<number>;

export class FileUploader {
  public progress: number = 0;
  public done: boolean = false;

  constructor(private fileUpload: FileUpload) {}

  uploadFile(file: File) {
    this.fileUpload(file).subscribe((progress) => {
      this.progress = progress;
    });
  }
}
