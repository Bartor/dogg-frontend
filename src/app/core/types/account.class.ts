export enum AccountType {
  ORGANIZER = 'ACCOUNT.ORGANIZER',
  ATTENDEE = 'ACCOUNT.ATTENDEE',
  HELPER = 'ACCOUNT.HELPER',
  SPONSOR = 'ACCOUNT.SPONSOR',
}

export interface ContactMethodDefinition {
  methodIdentifier: string;
  methodIcon: string;
}

export class ContactMethod {
  constructor(
    public methodDefinition: ContactMethodDefinition,
    public methodValue: string,
    public visible: boolean = false
  ) {}

  equals(other: ContactMethod) {
    return (
      this.methodDefinition === other.methodDefinition &&
      this.methodValue === other.methodValue &&
      this.visible === other.visible
    );
  }

  static copy(other: ContactMethod) {
    return new ContactMethod(
      other.methodDefinition,
      other.methodValue,
      other.visible
    );
  }
}

export class Account {
  constructor(
    public username: string,
    public accountType: AccountType = AccountType.ATTENDEE,
    public firstName?: string,
    public lastName?: string,
    public avatarSrc?: string,
    public concactMethods: ContactMethod[] = []
  ) {}

  equals(other: Account) {
    return (
      this.username === other.username &&
      this.accountType === other.accountType &&
      this.firstName === other.firstName &&
      this.lastName === other.lastName &&
      this.avatarSrc === other.avatarSrc &&
      this.concactMethods.every((cm) =>
        other.concactMethods.find((ocm) => ocm.equals(cm))
      )
    );
  }

  static copy(other: Account) {
    return new Account(
      other.username,
      other.accountType,
      other.firstName,
      other.lastName,
      other.avatarSrc,
      other.concactMethods.map((cm) => ContactMethod.copy(cm))
    );
  }
}
