import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CeloProvider, Alfajores } from '@celo/react-celo';
import '@celo/react-celo/lib/styles.css';



import Layout from "../components/Layout";
import { MarketplaceProvider } from "@/context/marketplaceContext";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <CeloProvider
      dapp={{
        name: "celo-composer dapp",
        description: "My awesome celo-composer description",
        url: "https://example.com",
        icon: "https://example.com/favicon.ico",
      }}
      defaultNetwork={Alfajores.name}
      connectModal={{
        providersOptions: { searchable: true },
      }}
    >
      <MarketplaceProvider>
        <ShoppingCartProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ShoppingCartProvider>
      </MarketplaceProvider>
    </CeloProvider>
  );
}

export default App;