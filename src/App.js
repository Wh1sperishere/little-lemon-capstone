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
          <li><a href='/'>Home</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Menu</a></li>
          <li><a href='/'>Reservations</a></li>
          <li><a href='/'>Order Online</a></li>
          <li><a href='/'>LogIn</a></li>
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
