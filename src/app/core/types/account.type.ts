export enum AccountType {
  ORGANIZER = 'ACCOUNT.ORGANIZER',
  ATTENDEE = 'ACCOUNT.ATTENDEE',
  HELPER = 'ACCOUNT.HELPER',
  SPONSER = 'ACCOUNT.SPONSOR',
}

export interface Account {
  avatarUri: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  accountType: AccountType;
}
