/** @jsx jsx */
import { jsx } from 'theme-ui';
import Navbar from './Navbar';
import Footer from './Footer';

export const Head = () => (<>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
</>)

const Layout = ({ children }) => {
  return (
    <div>

      <Navbar />
      <main>

        {children}</main>
      <Footer />
      <div id="modal"></div>
    </div>
  );
};

export default Layout;