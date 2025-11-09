export type Locale = (typeof locales)[number];

export const locales = ['zh', 'en', 'ko', 'ja', 'de', 'vi'] as const;
export const defaultLocale: Locale = 'zh';