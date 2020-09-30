import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDnd]',
})
export class DndDirective {
  constructor() {}

  @Output() onfileDropped = new EventEmitter<FileList>();
  @Output() onWrongFile = new EventEmitter<Error>();
  @Input() supportedExtensions: string[] = [];
  @Input() maximumNumberOfFiles: number = 0;

  @HostBinding('class.fileOver') fileOver: boolean;
  @HostBinding('class.wrongFile') wrongFile: boolean;

  @HostListener('dragover', ['$event']) public onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = false;
  }

  @HostListener('drop', ['$event']) public onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = false;
    const files = event.dataTransfer.files;

    if (files.length) {
      if (
        this.maximumNumberOfFiles === 0 ||
        files.length <= this.maximumNumberOfFiles
      ) {
        if (
          this.supportedExtensions.length === 0 ||
          Array.from(files).every((file) =>
            this.supportedExtensions.includes(file.type)
          )
        ) {
          this.onfileDropped.emit(files);
        } else {
          this.onWrongFile.emit(new Error('ERROR.WRONG_FILE_FORMAT'));
        }
      } else {
        this.onWrongFile.emit(new Error('ERROR.TOO_MANY_FILES'));
      }
    }
  }
}
