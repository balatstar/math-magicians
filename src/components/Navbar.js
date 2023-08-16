import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];

function Navbar() {
  return (
    <header>
      <h1>Math Magicians</h1>
      <nav className="navbar">
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
