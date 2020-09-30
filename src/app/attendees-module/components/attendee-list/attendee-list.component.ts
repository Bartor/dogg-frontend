import { Account } from './../../../core/types/account.class';
import { AttendeesService } from './../../services/attendees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.scss'],
})
export class AttendeeListComponent implements OnInit {
  attendees: Account[] = [];

  constructor(private attendeesService: AttendeesService) {
    attendeesService.attendees.subscribe(
      (attendees) => (this.attendees = attendees)
    );
  }

  ngOnInit(): void {
    this.attendeesService.refreshAccounts();
  }
}
