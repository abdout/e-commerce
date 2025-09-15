'use client';

import Link from 'next/link';
import { Languages } from 'lucide-react';
import { useSwitchLocaleHref } from '@/components/internationalization/use-locale';
import { type Locale } from '@/components/internationalization/config';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const getSwitchLocaleHref = useSwitchLocaleHref();
  const pathname = usePathname();

  // Don't show switcher on auth pages
  if (pathname.includes('/sign-in') || pathname.includes('/sign-up')) {
    return null;
  }

  // Toggle between en and ar
  const targetLocale: Locale = currentLocale === 'en' ? 'ar' : 'en';

  return (
    <Link
      href={getSwitchLocaleHref(targetLocale)}
      className="flex items-center justify-center p-2 rounded-lg hover:bg-light-200 text-dark-700 transition-colors"
      aria-label={`Switch to ${targetLocale === 'en' ? 'English' : 'Arabic'}`}
    >
      <Languages className="h-5 w-5" />
    </Link>
  );
}