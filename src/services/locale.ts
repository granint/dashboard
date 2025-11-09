'use server';

import { cookies } from 'next/headers';
import { Locale, defaultLocale } from '@/i18n/config';

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'GRANINT_DASHBOARD_LOCALE';

export async function getUserLocale(): Promise<Locale> {
    const cookie = (await cookies()).get(COOKIE_NAME)?.value;
    return cookie as Locale || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
    (await cookies()).set(COOKIE_NAME, locale);
}