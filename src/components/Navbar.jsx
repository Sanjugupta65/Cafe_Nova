import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Coffee",
    "Heritage",
    "Gallery",
    "Reviews",
    "Vision",
    "Contact",
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <h1 className="logo">
          <a href="#home">
            Cafè <span>Nova</span>
          </a>
        </h1>

        {/* MOBILE ICON */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        {/* MENU */}
        <ul className={open ? "nav-links active" : "nav-links"}>
          {links.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
