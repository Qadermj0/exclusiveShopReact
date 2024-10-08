import React, { useEffect, useRef, useState } from "react";
import { Container, Row } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import cancel from './icon/cancel.png';
import user from './icon/user.png';
import review from './icon/Reviews.png';
import mailbag from './icon/mallbag.png';
import logout from './icon/logout.png';

import { useSelector } from "react-redux";
import data from "../UI/Data";

const Header = () => {
  const totalQty = useSelector((state) => state.product.totalQuantity);
  const favQty = useSelector((state) => state.favProduct.totalQuantity);
  const [products, setProducts] = useState(data);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    let searchTerm = e.target.value;
    const searchedProduct = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(searchedProduct);

    navigate("/shop", { state: { searchTerm } });
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  const navigateIcon = () => {
    navigate("/cart");
  };

  const navigateFav = () => {
    navigate("/wishlist");
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  // Close dropdown when a profile option is clicked
  const closeDropdown = () => setToggle(false);

  const nav_link = [
    {
      path: "home",
      display: "Home",
    },
    {
      path: "contact",
      display: "Contact",
    },
    {
      path: "about",
      display: "About",
    },
    {
      path: "signup",
      display: "Sign up",
    },
  ];

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <div>
                <Link to="/home">
                  <h1>Exclusive</h1>
                </Link>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav_link.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_icon">
              <div className="search">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  onChange={handleSearch}
                />
                <i className="ri-search-line"></i>
              </div>
              
              <span className="fav_icon" onClick={navigateFav}>
                <i className="ri-heart-line"></i>
                {favQty > 0 && <span className="badge">{favQty}</span>}
              </span>

              <span className="cart_icon" onClick={navigateIcon}>
                <i className="ri-shopping-cart-2-line"></i>{" "}
                {totalQty > 0 && <span className="badge">{totalQty}</span>}
              </span>

              <span className="profile">
                <i
                  onClick={() => setToggle(!toggle)}
                  className="ri-user-3-line"
                ></i>

                <div
                  className={
                    toggle ? "profile_action d-block" : "profile_action"
                  }
                >
                  <Link to="/account" onClick={closeDropdown}>
                    <img src={user} alt="Account" className="dropdown-icon" />
                    Manage My Account
                  </Link>
                  <Link to="/order" onClick={closeDropdown}>
                    <img src={mailbag} alt="Order" className="dropdown-icon" />
                    My Order
                  </Link>
                  <Link to="/cancellation" onClick={closeDropdown}>
                    <img src={cancel} alt="Cancel" className="dropdown-icon" />
                    My Cancellations
                  </Link>
                  <Link to="#" onClick={closeDropdown}>
                    <img src={review} alt="Reviews" className="dropdown-icon" />
                    My Reviews
                  </Link>
                  <Link to="/login" onClick={closeDropdown}>
                    <img src={logout} alt="Logout" className="dropdown-icon" />
                    Logout
                  </Link>
                </div>
              </span>

              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
