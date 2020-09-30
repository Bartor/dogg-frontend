import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendeesComponent } from './attendees.component';

@NgModule({
  declarations: [AttendeesComponent],
  exports: [AttendeesComponent],
  imports: [CommonModule, SharedModule],
})
export class AttendeesModule {}
