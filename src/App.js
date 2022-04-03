import Logo from "./components/Logo";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Logo />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
