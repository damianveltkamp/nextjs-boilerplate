import Head from 'next/head';
import Header from '../../source/components/header/Header';
import Footer from '../../source/components/footer/Footer';
import layoutStyles from '../../source/sass/settings/Layout.module.css';

const Layout: React.FC = ({ children }) => (
  <>
    <div className={layoutStyles['o-page-container']}>
      <Head>
        <title>NextJS boilerplate</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
