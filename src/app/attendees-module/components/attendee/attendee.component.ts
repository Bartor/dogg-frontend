import { Account } from './../../../core/types/account.class';
import { AttendeesService } from './../../services/attendees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.scss'],
})
export class AttendeeComponent implements OnInit {
  currentUser: Account = null;

  constructor(
    private route: ActivatedRoute,
    private attendeesService: AttendeesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentUser = null;
      this.attendeesService
        .getUserByUsername(params.username)
        .subscribe((userAccount) => (this.currentUser = userAccount));
    });
  }
}
