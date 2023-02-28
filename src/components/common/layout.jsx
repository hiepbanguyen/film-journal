import Header from "./header/header.jsx";
import Footer from "./footer.jsx";

export default function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
