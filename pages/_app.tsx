import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from "@auth0/auth0-react";
import { Grommet } from 'grommet';
import { useRouter } from 'next/router';
import { theme } from '../utils/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Auth0Provider
    domain={process.env.NEXT_PUBLIC_AUTH_DOMAIN}
    clientId={process.env.NEXT_PUBLIC_AUTH_CLIENT_ID}
    redirectUri={router.basePath}
  >
    <Grommet theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  </Auth0Provider>
  )
}
export default MyApp
