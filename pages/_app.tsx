import Layout from '../pages/layout/Layout';
import '../styles/globals.css';

// TODO find out what types to use in this interface
interface AppProps {
  Component: any;
  pageProps: any;
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
