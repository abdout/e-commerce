export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ar'], // English and Arabic for Nike Store
} as const;

export type Locale = (typeof i18n)['locales'][number];

// Locale metadata for enhanced functionality
export const localeConfig = {
  'en': {
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    flag: '🇺🇸',
    dateFormat: 'MM/dd/yyyy',
    currency: 'SAR', // Using SAR for Saudi market
    currencySymbol: 'SAR',
  },
  'ar': {
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
    flag: '🇸🇦',
    dateFormat: 'dd/MM/yyyy',
    currency: 'SAR',
    currencySymbol: 'ر.س',
  },
} as const;

export function isRTL(locale: Locale): boolean {
  return localeConfig[locale]?.dir === 'rtl';
}