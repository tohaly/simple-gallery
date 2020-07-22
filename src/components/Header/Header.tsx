import "./Header.css";
import React, { useState, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router-dom";

function Header({ location }: RouteComponentProps) {
  const [activePage, setActivePage] = useState({ isHome: true });

  useEffect(() => {
    const { pathname } = location;
    if (pathname === "/") {
      setActivePage({
        isHome: true,
      });
    } else {
      setActivePage({
        isHome: false,
      });
    }
  }, []);

  const changeActiveLink = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const { pathname } = location;
    const path = event.currentTarget.getAttribute("href");
    if (path === "/") {
      setActivePage({
        isHome: true,
      });
    } else {
      setActivePage({
        isHome: false,
      });
    }
  };

  const { isHome } = activePage;
  return (
    <header className="header">
      <h1 className="header__title">
        <Link className="link" to="/">
          Simple Gallery
        </Link>
      </h1>
      <nav className="header__nav">
        <Link
          onClick={changeActiveLink}
          className={`link header__link ${isHome ? "link_active" : ""}`}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={changeActiveLink}
          className={`link header__link ${!isHome ? "link_active" : ""}`}
          to="/favorites"
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
}

export default withRouter(Header);
