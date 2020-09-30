import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendeesComponent } from './attendees.component';
import { AttendeeListComponent } from './components/attendee-list/attendee-list.component';
import { AttendeeComponent } from './components/attendee/attendee.component';

@NgModule({
  declarations: [AttendeesComponent, AttendeeListComponent, AttendeeComponent],
  exports: [AttendeesComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class AttendeesModule {}
