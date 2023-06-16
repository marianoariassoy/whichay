import Header from "../components/Header";
import Footer from "../components/Footer";
import NavMobile from "../components/NavMobile";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className="fixed w-full text-white z-40">
        <Header />
        <NavMobile />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
