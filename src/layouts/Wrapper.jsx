import Header from '../components/globals/Header';
import Footer from '../components/globals/Footer';
import { Outlet } from 'react-router-dom';

function Wrapper() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Wrapper;
