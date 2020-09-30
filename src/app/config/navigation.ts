export interface BasicNavigationItem {
  route: string;
  translationKey: string;
}

export const TOP_NAVIGATION: BasicNavigationItem[] = [
  {
    route: 'account',
    translationKey: 'NAV.ACCOUNT',
  },
  {
    route: 'attendees',
    translationKey: 'NAV.ATTENDEES',
  },
];
