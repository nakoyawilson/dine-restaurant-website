import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./components/Logo";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  let location = useLocation();

  useEffect(() => {
    location.pathname === "/booking"
      ? (document.body.classList = "booking")
      : (document.body.classList = "home");
  }, [location]);

  return (
    <>
      <Logo />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
