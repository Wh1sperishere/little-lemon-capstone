import { ReactComponent as Logo } from "./assets/Logo.svg";
import { useReducer } from "react";
import { fetchAPI } from "./api";

import Home from "./Pages/Home";
import About from "./Pages/About";
import LogInOrRegister from "./Pages/LogInOrRegister";
import Menu from "./Pages/Menu";
import OrderOnline from "./Pages/OrderOnline";
import Reservations from "./Pages/Reservations";
import "./App.css";

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function updateTimes(state, date) {
  return fetchAPI(new Date(date));
}

function Footer() {
  return (
    <footer className="footerSection">
      <h1>This is a footer for now</h1>
    </footer>
  );
}

function App() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <>
      <header className="head">
        <Logo />
      </header>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservations">Reservations</a>
          </li>
          <li>
            <a href="#order">Order Online</a>
          </li>
          <li>
            <a href="#login">LogIn</a>
          </li>
        </ul>
      </nav>
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="menu">
          <Menu />
        </section>
        <section id="reservations">
          <Reservations
            availableTimes={availableTimes}
            updateTimes={dispatch}
          />
        </section>
        <section id="order">
          <OrderOnline />
        </section>
        <section id="login">
          <LogInOrRegister />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
