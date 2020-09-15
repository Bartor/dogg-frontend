import { Route } from '@angular/router';
import { AccountComponent } from '../account-module/account.component';
import { AttendeesComponent } from '../attendees-module/attendees.component';

export const APP_ROUTES: (Route & { translationKey: string })[] = [
  {
    path: 'account',
    translationKey: 'NAV.ACCOUNT',
    component: AccountComponent,
  },
  {
    path: 'attendees',
    translationKey: 'NAV.ATTENDEES',
    component: AttendeesComponent,
  },
];
