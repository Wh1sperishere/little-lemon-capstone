import { ReactComponent as Logo } from "./assets/Logo.svg";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LogInOrRegister from "./Pages/LogInOrRegister";
import Menu from "./Pages/Menu";
import OrderOnline from "./Pages/OrderOnline";
import Reservations from "./Pages/Reservations";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Footer() {
  return (
    <footer className="footerSection">
      <h1>this is a footer for now</h1>
    </footer>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="head">
          <Logo />
        </header>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order">Order Online</Link>
            </li>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/order" element={<OrderOnline />} />
            <Route path="/login" element={<LogInOrRegister />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
