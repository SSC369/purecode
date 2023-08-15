import { BsPerson, BsCart } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setMenu] = useState(false);
  return (
    <nav className="d-flex flex-column align-items-center">
      <div className="w-100 p-3 navbar-container align-items-center d-flex justify-content-between bg-dark">
        <img
          src="https://res.cloudinary.com/dcnpafcrg/image/upload/v1692088549/logo_vpyx7e.svg"
          className="logo"
          alt="logo"
        />
        <button className="text-white buy-now-button">Buy Now</button>
      </div>

      <div className="w-75 p-3 d-flex justify-content-between align-items-center">
        <img
          src="https://res.cloudinary.com/dcnpafcrg/image/upload/v1692088622/logo2_ficele.svg"
          className="logo"
          alt="product-logo"
        />
        <ul className="options-container">
          <li className="option">Men</li>
          <li className="option">Women</li>
          <li className="option">Beauty</li>
          <li className="option">Sport</li>
          <li className="option">Templates</li>
          <li className="option">Explore</li>
        </ul>

        <button
          onClick={() => setMenu(!toggleMenu)}
          className="toggle-menu-button"
          type="button"
        >
          <RxHamburgerMenu fontSize={30} />
        </button>

        <div className="icon-options-container">
          <BiSearch fontSize={24} />
          <BsPerson fontSize={24} />
          <BsCart fontSize={24} />
        </div>
      </div>

      <ul className={`menu-options ${toggleMenu ? "show" : "hide"}`}>
        <li className="option">Men</li>
        <li className="option">Women</li>
        <li className="option">Beauty</li>
        <li className="option">Sport</li>
        <li className="option">Templates</li>
        <li className="option">Explore</li>
      </ul>
    </nav>
  );
};

export default Navbar;
