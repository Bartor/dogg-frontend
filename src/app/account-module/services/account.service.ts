import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CONTACT_METHODS } from 'src/app/config/contact-methods';
import {
  Account,
  AccountType,
  ContactMethod,
} from '../../core/types/account.class';

const accountPlaceholder: Account = new Account(
  'Test Name',
  AccountType.HELPER,
  'John',
  'Smith',
  'https://www.soidog.org/sites/default/files/Slider_Yungma_Mobile_0.jpg',
  [new ContactMethod(CONTACT_METHODS[0], 'bartor@krajczyk.pl')]
);
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountSubject = new BehaviorSubject<Account>(accountPlaceholder);
  public account = this.accountSubject.asObservable();

  public uploadAvatar(avatarFile: File): Observable<number> {
    return interval(25).pipe(take(100));
  }

  public updateAccount(account: Account) {
    this.accountSubject.next(account);
  }

  constructor() {}
}
