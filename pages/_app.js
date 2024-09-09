import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router';

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;
const clerkApiKey = process.env.CLERK_API_KEY;

const MyApp = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  if (pathname === '/sign-in' || pathname === '/sign-up') {
    return <Component {...pageProps} />;
  }

  return (
    <ClerkProvider
      frontendApi={clerkFrontendApi}
      apiKey={clerkApiKey}
      navigate={(to) => useRouter().push(to)}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default MyApp;
