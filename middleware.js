import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/', '/sign-in', '/sign-up', '/dashboard'],
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)'],
}
