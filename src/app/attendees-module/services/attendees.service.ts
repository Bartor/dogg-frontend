import { ApiCommunicationService } from './../../core/services/api-communication.service';
import { Account } from './../../core/types/account.class';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AttendeesService {
  private attendeesSubject = new BehaviorSubject<Account[]>([]);
  public attendees = this.attendeesSubject.asObservable();

  constructor(private apiCommunicationService: ApiCommunicationService) {}

  public refreshAccounts(): void {
    this.apiCommunicationService
      .getAllAccounts()
      .subscribe((accounts) => this.attendeesSubject.next(accounts));
  }

  public getUserByUsername(username: string): Observable<Account> {
    return this.apiCommunicationService.getUserByUsername(username);
  }
}
