import {
  ContactMethod,
  ContactMethodDefinition,
} from '../core/types/account.class';

export const CONTACT_METHODS: ContactMethodDefinition[] = [
  {
    methodIdentifier: 'CONTACT.EMAIL',
    methodIcon: '',
    methodInputType: 'email',
    methodInputRegex: '',
  },
  {
    methodIdentifier: 'CONTACT.TELEGRAM',
    methodIcon: '',
    methodInputType: 'text',
    methodInputRegex: '@[0-9A-Za-z_]{5,}',
  },
  {
    methodIdentifier: 'CONTACT.DISCORD',
    methodIcon: '',
    methodInputType: 'text',
    methodInputRegex: '.+#[0-9]{4}',
  },
];
