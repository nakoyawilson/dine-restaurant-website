import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./components/Logo";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  let location = useLocation();
  const [reservationCount, setReservationCount] = useState(0);

  const increaseCount = () => {
    setReservationCount(reservationCount + 1);
  };

  const decreaseCount = () => {
    if (reservationCount > 0) {
      setReservationCount(reservationCount - 1);
    }
  };

  useEffect(() => {
    location.pathname === "/booking"
      ? (document.body.classList = "booking")
      : (document.body.classList = "home");
  }, [location]);

  return (
    <>
      <Logo logoClasses="header-logo" />
      <Outlet context={[reservationCount, increaseCount, decreaseCount]} />
      <Footer />
    </>
  );
}

export default App;
