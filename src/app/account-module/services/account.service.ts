import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Account, AccountType } from '../../core/types/account.type';

const accountPlaceholder: Account = {
  avatarUri:
    'https://www.soidog.org/sites/default/files/Slider_Yungma_Mobile_0.jpg',
  username: 'TestUser',
  firstName: 'John',
  lastName: 'Smith',
  email: 'test@example.com',
  accountType: AccountType.ATTENDEE,
};

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountSubject = new BehaviorSubject<Account>(accountPlaceholder);
  public account = this.accountSubject.asObservable();

  public uploadAvatar(avatarFile: File): Observable<number> {
    return interval(25).pipe(take(100));
  }

  constructor() {}
}
