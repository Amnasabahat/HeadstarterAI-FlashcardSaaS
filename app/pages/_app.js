// pages/_app.js
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css"; // Adjust the path if necessary

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider frontendApi="  ">
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}

export default MyApp;
