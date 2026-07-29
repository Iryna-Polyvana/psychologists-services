import { NavLink } from "react-router";

function Header() {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/psychologists">Psychologists</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </header>
  );
}
export default Header;
