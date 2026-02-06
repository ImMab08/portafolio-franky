import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Solo rutas de la app (sin assets)
    "/((?!api|_next|_vercel|favicon.ico|_not-found|.*\\..*).*)",
  ],
};
