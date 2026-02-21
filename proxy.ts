import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest) {
    return intlMiddleware(request);
}

export const config = {
    // Match all pathnames except for:
    // - API routes (/api/...)
    // - Next.js internals (_next/...)
    // - Static files (favicon.ico, images, etc.)
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
