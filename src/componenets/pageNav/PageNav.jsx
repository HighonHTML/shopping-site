import { NavLink } from "react-router-dom";
import Search from "../search/Search";
import styles from "./PageNav.module.css";
function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <ul className="flex justify-start gap-10">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
          </ul>
        </li>
        <li className="w-1/2">
          <Search />
        </li>
        <li>
          <ul className="flex justify-end gap-10">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
