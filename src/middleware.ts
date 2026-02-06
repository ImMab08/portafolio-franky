import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { createServerClient } from '@supabase/ssr'

const intlMiddleware = createMiddleware(routing)

export async function middleware(req: NextRequest) {
  // 1️⃣ Deja que next-intl haga su magia
  const res = intlMiddleware(req)

  // 2️⃣ Crea Supabase SIN reemplazar la response
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: (cookies) => {
          cookies.forEach(({ name, value, options }) =>
            res.cookies.set(name, value, options)
          )
        }
      }
    }
  )

  // 3️⃣ auth SOLO para rutas sensibles
  const isAdminRoute = req.nextUrl.pathname.includes('/admin')

  if (isAdminRoute) {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.redirect(
        new URL('/auth', req.url)
      )
    }
  }

  return res
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}
