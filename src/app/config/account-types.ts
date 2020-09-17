import { AccountTypeDefinition } from '../core/types/account.class';

export const ACCOUNT_TYPES: AccountTypeDefinition[] = [
  { typeIdentifier: 'ACCOUNT.ORGANIZER', typeColor: '', admin: true },
  { typeIdentifier: 'ACCOUNT.HELPER', typeColor: '', admin: false },
  { typeIdentifier: 'ACCOUNT.ATTENDEE', typeColor: '', admin: false },
];

export const ADMIN_ACCOUNT_TYPE = ACCOUNT_TYPES[0];
