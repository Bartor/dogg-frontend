import { AttendeeComponent } from './../attendees-module/components/attendee/attendee.component';
import { Route } from '@angular/router';
import { AccountComponent } from '../account-module/account.component';
import { AttendeesComponent } from '../attendees-module/attendees.component';

export const APP_ROUTES: Route[] = [
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'attendees',
    component: AttendeesComponent,
  },
  {
    path: 'attendee/:username',
    component: AttendeeComponent,
  },
];
