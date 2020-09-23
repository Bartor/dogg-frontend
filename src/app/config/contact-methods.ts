import { ContactMethodDefinition } from '../core/types/account.class';

export const CONTACT_METHODS: ContactMethodDefinition[] = [
  {
    methodIdentifier: 'CONTACT.EMAIL',
    methodIcon: '',
    methodInputType: 'email',
    methodInputRegex: '',
    methodPlaceholder: 'CONTACT.EMAIL_PLACEHOLDER',
  },
  {
    methodIdentifier: 'CONTACT.TELEGRAM',
    methodIcon: '',
    methodInputType: 'text',
    methodInputRegex: '@[0-9A-Za-z_]{5,}',
    methodPlaceholder: 'CONTACT.TELEGRAM_PLACEHOLDER',
  },
  {
    methodIdentifier: 'CONTACT.DISCORD',
    methodIcon: '',
    methodInputType: 'text',
    methodInputRegex: '.+#[0-9]{4}',
    methodPlaceholder: 'CONTACT.DISCORD_PLACEHOLDER',
  },
];
