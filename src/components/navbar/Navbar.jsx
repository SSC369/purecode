import "./navbar.css";

const Navbar = () => {
  return (
    <nav style={{ minWidth: "300px" }} className="ps-5 pe-5 pt-3 pb-3 bg-dark">
      <div className="w-80 align-items-center d-flex justify-content-between">
        <img
          src="https://res.cloudinary.com/dcnpafcrg/image/upload/v1692088549/logo_vpyx7e.svg"
          className="logo"
          alt="logo"
        />
        <button className="text-white buy-now-button">Buy Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
