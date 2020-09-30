import { CONTACT_METHODS } from './../config/contact-methods';
import { ACCOUNT_TYPES } from 'src/app/config/account-types';
import { Account, ContactMethod } from './../core/types/account.class';

export const TEST_USERS: Account[] = Array.from({ length: 10 }).map(
  (_, i) =>
    new Account(
      `user-${i}`,
      ACCOUNT_TYPES[i % ACCOUNT_TYPES.length],
      'John',
      'Test',
      'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg',
      [
        new ContactMethod(
          CONTACT_METHODS[i % CONTACT_METHODS.length],
          'test',
          i % 2 === 0
        ),
      ]
    )
);
