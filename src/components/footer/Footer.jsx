import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube, AiFillTwitterSquare } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import "./footer.css";

const start = [
  "Release Notes",
  "Upgrade Guide",
  "Browser Support",
  "Dark Mode",
];

const explore = ["Prototyping", "Design System", "Pricing", "Security"];
const resources = ["Best Practices", "Support", "Developers", "Learn design"];
const community = [
  "Discussion Forums",
  "Code of Conduct",
  "Contributing",
  "API Reference",
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-column">
        <img
          src="https://res.cloudinary.com/dcnpafcrg/image/upload/v1692088622/logo2_ficele.svg"
          className="footer-icon"
          alt="product-logo"
        />
        <div className="d-flex align-items-center ms-1 mb-1">
          <BsFacebook fontSize={20} />
          <p className="ms-1 m-0">Facebook</p>
        </div>
        <div className="d-flex align-items-center ms-1 mb-1">
          <AiFillYoutube fontSize={20} />
          <p className="ms-1 m-0">Youtube</p>
        </div>
        <div className="d-flex align-items-center ms-1 mb-1">
          <BsTelegram fontSize={20} />
          <p className="ms-1 m-0">Telegram</p>
        </div>
        <div className="d-flex align-items-center ms-1 mb-1">
          <AiFillTwitterSquare fontSize={20} />
          <p className="ms-1 m-0">Twitter</p>
        </div>
      </div>

      <div className="footer-column">
        <h3>Getting Started</h3>
        <ul className="list-unstyled">
          {start.map((item) => (
            <li key={item} className="ms-1 mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-column">
        <h3>Explore</h3>
        <ul className="list-unstyled">
          {explore.map((item) => (
            <li key={item} className=" ms-1 mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-column">
        <h3>Resourses</h3>
        <ul className="list-unstyled">
          {resources.map((item) => (
            <li key={item} className="ms-1 mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-column">
        <h3>Community</h3>
        <ul className="list-unstyled">
          {community.map((item) => (
            <li key={item} className="ms-1 mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
