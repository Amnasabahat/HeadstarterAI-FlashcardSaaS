import { clerkMiddleware } from '@clerk/nextjs/server';

const publicRoutes = ['/sign-in', '/sign-up'];

export default clerkMiddleware({
  publicRoutes,
  async onError(err) {
    console.error("Middleware error:", err);
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/api/(.*)"],
};
