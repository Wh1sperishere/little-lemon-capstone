import { ReactComponent as Logo } from './assets/Logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header className='head'>
        <Logo />
      </header>
      <nav className='navigation'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>LogIn</li>
        </ul>
      </nav>
      <main>
        <h2>This is a Main Section</h2>
      </main>
      <footer>
        <h3>This is a footer</h3>
      </footer>
    </>
  );
}

export default App;
