export interface AccountTypeDefinition {
  typeIdentifier: string;
  typeColor: string;
  admin: boolean;
}

export interface ContactMethodDefinition {
  methodIdentifier: string;
  methodIcon: string;
  methodInputType: string;
  methodInputRegex: string;
  methodPlaceholder: string;
}

export class ContactMethod {
  constructor(
    public methodDefinition: ContactMethodDefinition,
    public methodValue: string,
    public visible: boolean = false
  ) {}

  static copy(other: ContactMethod): ContactMethod {
    return new ContactMethod(
      other.methodDefinition,
      other.methodValue,
      other.visible
    );
  }

  equals(other: ContactMethod): boolean {
    return (
      this.methodDefinition === other.methodDefinition &&
      this.methodValue === other.methodValue &&
      this.visible === other.visible
    );
  }
}

export class Account {
  constructor(
    public username: string,
    public accountType: AccountTypeDefinition,
    public firstName?: string,
    public lastName?: string,
    public avatarSrc?: string,
    public concactMethods: ContactMethod[] = []
  ) {}

  static copy(other: Account): Account {
    return new Account(
      other.username,
      other.accountType,
      other.firstName,
      other.lastName,
      other.avatarSrc,
      other.concactMethods.map((cm) => ContactMethod.copy(cm))
    );
  }

  equals(other: Account): boolean {
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
}
