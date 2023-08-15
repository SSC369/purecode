import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BiMap } from "react-icons/bi";
import { BsCreditCard, BsPaintBucket } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { PiInfo } from "react-icons/pi";
import "./home.css";

const initialCart = [
  {
    imageUrl:
      "https://res.cloudinary.com/dcnpafcrg/image/upload/v1692088636/hoodie_m9lzpx.png",
    name: "Rey Nylon Backpack",
    color: "Black",
    size: "2XL",
    cost: 74,
    quantity: 1,
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dcnpafcrg/image/upload/v1692088643/beanie_e3geto.png",
    name: "Waffle Knit Beanie",
    color: "Black",
    size: "2XL",
    cost: 132,
    quantity: 1,
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dcnpafcrg/image/upload/v1692088647/purse_xhknue.png",
    name: "Travel Pet Carrier",
    color: "Black",
    size: "2Xl",
    cost: 28,
    quantity: 1,
  },
];

const Home = () => {
  const [cart, setCart] = useState(initialCart);
  const [total, setTotal] = useState(234);

  const onIncrement = (item) => {
    const { name, cost } = item;
    setTotal(total + cost);

    const updatedCart = cart.map((product) => {
      if (name === product.name) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const onDecrement = (item) => {
    const { quantity, name, cost } = item;
    if (quantity > 1) {
      setTotal(total - cost);
      const updatedCart = cart.map((product) => {
        if (name === product.name) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    }
  };

  return (
    <div className="home-container">
      <div className="checkout-container">
        <h1>Checkout</h1>
        <p>
          Homepage / Clothing Categories / <u>Checkout</u>
        </p>
      </div>

      <div className="d-flex flex-wrap">
        <div style={{ minWidth: "440px" }} className="w-50">
          <div className="card-container p-3 mb-3">
            <div className="d-flex align-items-start">
              <div className="">
                <CgProfile fontSize={20} />
              </div>
              <div className="d-flex flex-column ms-2">
                <p className="mb-1">CONTACT INFO</p>
                <p className="fw-semibold fs-6">Enrico Smith +855-666-7744</p>
              </div>
            </div>
            <button type="button" className="btn btn-outline-secondary">
              Change
            </button>
          </div>

          <div className="card-container p-3">
            <div className="d-flex align-items-start">
              <div className="">
                <BiMap fontSize={20} />
              </div>
              <div className="d-flex flex-column ms-2">
                <p className="mb-1">SHIPPING ADDRESS</p>
                <p className="fw-semibold fs-6">
                  St. Paul's Road, Norris, SD 57560. Dakota, USA
                </p>
              </div>
            </div>
            <button type="button" className="btn btn-outline-secondary">
              Change
            </button>
          </div>

          <form className="address-container p-3">
            <div className="row">
              <div className="w-50">
                <label htmlFor="name" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="w-50">
                <label htmlFor="last name" className="form-label">
                  Last Name
                </label>
                <input type="text" className="form-control" id="last name" />
              </div>
            </div>

            <div className="row mt-2">
              <div className="w-75">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  placeholder="Address"
                  type="text"
                  className="form-control"
                  id="address"
                />
              </div>
              <div className="w-25">
                <label htmlFor="apt" className="form-label">
                  Apt, Suite*
                </label>
                <input
                  placeholder="Apt"
                  type="text"
                  className="form-control"
                  id="apt"
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="w-50">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  placeholder="City"
                  type="text"
                  className="form-control"
                  id="city"
                />
              </div>
              <div className="w-50">
                <label htmlFor="country" className="form-label">
                  Country
                </label>

                <select defaultValue="Select Country" className="form-select">
                  <option>Country 1</option>
                  <option>Country 2</option>
                </select>
              </div>
            </div>

            <div className="row mt-2">
              <div className="w-50">
                <label htmlFor="state" className="form-label">
                  State/Provide
                </label>
                <input
                  placeholder="State"
                  type="text"
                  className="form-control"
                  id="state"
                />
              </div>
              <div className="w-50">
                <label htmlFor="code" className="form-label">
                  Postal code
                </label>
                <input
                  placeholder="Postal Code"
                  type="text"
                  className="form-control"
                  id="code"
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="w-50">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="home"
                />
                <label className="form-check-label ms-2" htmlFor="home">
                  Home (All day Delivery)
                </label>
              </div>

              <div className="w-50">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="office"
                />
                <label className="form-check-label ms-2" htmlFor="office">
                  Office (Delivery 9 AM - 5 PM)
                </label>
              </div>
            </div>

            <div className="d-flex align-items-center mt-3">
              <button className="btn btn-dark">Save and next to Payment</button>

              <button className="cancel-button">Cancel</button>
            </div>
          </form>

          <div className="card-container p-3 mt-3">
            <div className="d-flex align-items-start">
              <div className="">
                <BsCreditCard fontSize={20} />
              </div>
              <div className="d-flex flex-column ms-2">
                <p className="mb-1">
                  PAYMENT METHOD <TiTick fontSize={20} />
                </p>
                <p className="fw-semibold fs-6">
                  Google / Apple Wallet xxx-xxx-xx55
                </p>
              </div>
            </div>
            <button type="button" className="btn btn-outline-secondary">
              Change
            </button>
          </div>
        </div>

        <div className="order-summary-container p-4">
          <h4 className="mb-3 ">Order Summary</h4>
          <ul className="list-unstyled">
            {cart.map((item) => (
              <li
                style={{ borderBottom: "1px solid lightgray" }}
                className="d-flex mb-4 pb-3"
                key={item.name}
              >
                <div
                  className=""
                  style={{
                    backgroundColor: "rgb(237, 247, 250)",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="product-image"
                  />
                </div>
                <div className="flex-grow-1 d-flex flex-column ms-4">
                  <div className="w-100 d-flex align-items-center justify-content-between">
                    <p>{item.name}</p>
                    <button type="button" className="btn btn-outline-success">
                      $ {item.cost * item.quantity}
                    </button>
                  </div>
                  <div className="d-flex">
                    <p className="color">
                      <BsPaintBucket /> {item.color}
                    </p>
                    <p className="ms-2">{item.size}</p>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <div
                      style={{ width: "80px" }}
                      className="d-flex align-items-center justify-content-between"
                    >
                      <button
                        onClick={() => onDecrement(item)}
                        type="button"
                        className="quantity-button"
                      >
                        -
                      </button>

                      <p className="m-0">{item.quantity}</p>

                      <button
                        onClick={() => onIncrement(item)}
                        className="quantity-button"
                        type="button"
                      >
                        +
                      </button>
                    </div>

                    <p className="m-0 text-success fw-medium">Remove</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <p className="">Discount Code</p>
          <div className="d-flex mb-4">
            <input type="text" className="form-control w-75" />
            <button className="btn btn-outline-secondary ms-3">Apply</button>
          </div>

          <div className="d-flex justify-content-between">
            <p>Subtotal</p>
            <p className="fw-semibold">${total}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Shipping estimate</p>
            <p className="fw-semibold">$5.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Tax estimate</p>
            <p className="fw-semibold">$24.90</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="fw-semibold">Order total</p>
            <p className="fw-semibold">${total + 5 + 24.9}0</p>
          </div>

          <div className="w-100 text-center mt-3">
            <button type="button" className="btn btn-dark w-50">
              Confirm Order
            </button>

            <p className="mt-1">
              <PiInfo />
              Learn more <u>Taxes</u> and <u>Shipping</u> information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
