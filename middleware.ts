// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// import { i18n } from './i18n.config';

// import { match as matchLocale } from '@formatjs/intl-localematcher';
// import Negotiator from 'negotiator';

// function getLocale(request: NextRequest): string | undefined {
//   const negotiatorHeaders: Record<string, string> = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//   // @ts-ignore locales are readonly
//   const locales: string[] = i18n.languages.map((lang) => lang.id);
//   const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

//   const locale = matchLocale(languages, locales, i18n.base || 'id');
//   return locale;
// }

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;
//   const pathnameIsMissingLocale = i18n.languages.every(
//     (locale) =>
//       !pathname.startsWith(`/${locale.id}/`) && pathname !== `/${locale.id}`,
//   );

//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);
//     return NextResponse.redirect(
//       new URL(
//         `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
//         request.url,
//       ),
//     );
//   }
// }

// export const config = {
//   // Matcher ignoring `/_next/` and `/api/`
//   matcher: ['/((?!api|_next/static|admin|_next/image|favicon.ico).*)'],
// };


import { NextRequest, NextResponse } from 'next/server'
 
const PUBLIC_FILE = /\.(.*)$/
 
export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }
 
  if (req.nextUrl.locale === 'default') {
    const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en'
 
    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    )
  }
}