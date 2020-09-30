import { Account } from './../types/account.class';
import { TEST_USERS } from './../../test/test-users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const SIMULATED_TIMEOUT = 500;

@Injectable({
  providedIn: 'root',
})
export class ApiCommunicationService {
  constructor(private http: HttpClient) {}

  getAllAccounts(): Observable<Account[]> {
    return new Observable<Account[]>((subscriber) => {
      subscriber.next(TEST_USERS);
      subscriber.complete();
    });
  }

  getMyAccount(): Observable<Account> {
    return new Observable<Account>((subscriber) =>
      subscriber.next({} as Account)
    );
  }

  updateMyAccount(): Observable<void> {
    return new Observable<void>((subscriber) => subscriber.complete());
  }

  getUserByUsername(username: string): Observable<Account> {
    return new Observable<Account>((subscriber) => {
      setTimeout(() => {
        subscriber.next(TEST_USERS.find((user) => user.username === username));
        subscriber.complete();
      }, SIMULATED_TIMEOUT);
    });
  }
}
