import { Link, useMatch, useResolvedPath } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./headerNav.module.css";

import useShopContext from "../../customHooks/useShopContext";

export default function Header() {
  const { totalItems } = useShopContext();

  const qtyIndicatorStyles = {
    fontSize:'16px',
    color: "white",
    padding: "4px 10px",
    marginLeft:"8px",
    background: "red",
    borderRadius: '100px',
    border: '2px solid white'
  };

  return (
    <header>
      <Link to="/" className={styles.title}>
        Sooper Shop
      </Link>
      <nav>
        <ul>
          <CustomLink to="/products">Products</CustomLink>
          <CustomLink to="/cart">
            <ShoppingCartIcon />
            {totalItems > 0 && <span style={qtyIndicatorStyles}>{totalItems}</span>}
          </CustomLink>
        </ul>
      </nav>
    </header>
  );
}

//...props (rest param) will enable us to apply the .active class to the propper li item
function CustomLink({ to, children, ...otherProps }) {
  //const path = window.location.pathname; //this wont work to assign the active class with react router, use react router Hooks below instead
  //useResolvedPath() allows you to take a relative path (to='about' -- where about is relative to whatever page you are currently on) or absolute path (to='/about'), and combines it with the current path you're on and gives you the actual full abosolute path (even if it starts out relative)
  //converts realtive paths (and absolute path endings) to absolute paths, garauntees you'll have a full absolute path even if it starts off relative
  const resolvedPath = useResolvedPath(to);

  //useMatch can take a string or an object {our resolved path name, does the entire path need to match or we doin partial matching (e.g. /projects ===/projects/todos)} --> {path:resolvedPath.pathname,end:true} we want to match entire url and nothing else
  //useMatch lets us compare the current path we are on in the routes to whatever path we want (to)
  const active = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={active ? "active" : ""}>
      <Link to={to} {...otherProps}>
        {children}
      </Link>
    </li>
  );
}
