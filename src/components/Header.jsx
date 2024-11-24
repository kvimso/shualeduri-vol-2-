
import React, { useState } from "react";

const Header = ({ order, setCart }) => {
  // პატარა ეკრანებისთვის ნავიგაციის მენიუ
  const SmallNav = () => {
    return (
      <div className=" md:hidden w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50">
        <div className="w-2/3 h-full bg-white p-10">
          {/* მენიუს დახურვის ღილაკი */}
          <button className="mb-14">
            <img
              src="/images/icon-close.svg"
              alt="icon-close.svg"
              className="w-5"
              onClick={() => setShowMenu((prev) => !prev)} // მენიუს ხილვადობის ჩართვა/გამორთვა
            />
          </button>
          {/* ნავიგაციის ბმულები */}
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li className="hover:font-extrabold text-lg text-dgBlue font-semibold cursor-pointer duration-100">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // ნავიგაციის ბმულები
  const navLinks = ["Collections", "Men", "Women", "About", "Contact"];
  // კალათის ხილვადობის მდგომარეობა
  const [showCart, setShowCart] = useState(false);
  // მენიუს ხილვადობის მდგომარეობა
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full font-Kumbh md:px-10">
      <nav className="max-w-7xl mx-auto flex items-center gap-10 border-b border-b-gBlue px-5 py-3 md:p-0">
        <div className="flex gap-5 items-center md:flex-none flex-1">
          {/* მენიუს ღილაკი პატარა ეკრანებისთვის */}
          <button
            className="md:hidden"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <img
              src="/images/icon-menu.svg"
              alt="icon-menu.svg"
              className="min-w-[20px]"
            />
          </button>
          {/* პატარა ეკრანის მენიუ */}
          {showMenu ? <SmallNav /> : null}
          {/* ლოგო */}
          <img src="/images/logo.svg" alt="logo.svg" className="w-[150px]" />
        </div>
        {/* დიდი ეკრანის ნავიგაცია */}
        <ul className="hidden md:flex md:justify-between lg:justify-start lg:gap-10 flex-1">
          {navLinks.map((link) => (
            <li className=" py-10 hover:border-b-4 hover:border-b-orange-500 text-md text-gBlue font-semibold cursor-pointer duration-100 z-50">
              {link}
            </li>
          ))}
        </ul>
        {/* კალათის ხილვა */}
        <div
          className="relative cursor-pointer"
          onClick={() => setShowCart((prev) => !prev)}
        >
          {/* კალათის რაოდენობის მაჩვენებელი */}
          <div className="absolute text-xs text-white bg-orange-500 w-6 text-center rounded-full -right-3 -top-2 font-bold py-0.5">
            {order.qty}
          </div>
          <img
            src="/images/icon-cart.svg"
            alt="icon-cart.svg"
            className="w-6"
          />
          {showCart ? (
            <div className="w-[350px] bg-white shadow-2xl rounded-lg absolute md:top-12 md:right-1/2 md:translate-x-1/3 z-50 min-h-52 flex flex-col top-14 -right-12">
              <p className="font-bold p-4">Cart</p>
              <hr className="w-full border-2 border-lgBlue" />
              {order?.qty > 0 ? (
                <div className="flex-1 p-5">
                  {/* პროდუქტის დეტალები */}
                  <div className="flex w-full items-center justify-between mb-3">
                    <img
                      src="/images/image-product-1-thumbnail.jpg"
                      alt="image-product-1-thumbnail.jpg"
                      className="w-14 rounded-md"
                    />
                    <div className="flex flex-col justify-between">
                      <h1 className="text-gBlue font-bold">
                        Fall Limited Edition Sneakers
                      </h1>
                      <div className="flex gap-2">
                        <span className="text-gBlue font-bold">
                          $125 x {order?.qty}
                        </span>
                        <span className="font-bold">
                          ${(125 * order?.qty).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    {/* პროდუქტის წაშლა კალათიდან */}
                    <div>
                      <button onClick={() => setCart({ ...order, qty: 0 })}>
                        <img
                          src="/images/icon-delete.svg"
                          alt="icon-delete.svg"
                          className="w-4"
                        />
                      </button>
                    </div>
                  </div>
                  {/* შეკვეთის ღილაკი */}
                  <button className="w-full p-3 bg-orange-500 text-vdBlue font-extrabold rounded-lg hover:bg-orange-300">
                    Checkout
                  </button>
                </div>
              ) : (
                <div className="flex justify-center items-center flex-1">
                  <p className="font-bold">Your cart is empty</p>
                </div>
              )}
            </div>
          ) : null}
        </div>
        {/* მომხმარებლის ავატარი */}
        <div>
          <img
            src="/images/image-avatar.png"
            alt="image-avatar.png"
            className="w-12 hover:border-2 hover:border-orange-500 duration-100 cursor-pointer rounded-full"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
