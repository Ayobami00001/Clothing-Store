import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/assets";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }

      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="px-4 pt-16 pb-20 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="pt-10 mb-12 border-t">
        <h1 className="mb-3 text-4xl text-gray-900 prata-regular sm:text-5xl">
          Your Cart
        </h1>
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
          Review your selected items before checkout
        </p>
      </div>

      {cartData.length > 0 ? (
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Left Side - Cart Items */}
          <div className="flex-1 space-y-8">
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id
              );

              if (!productData) return null;

              return (
                <div
                  key={index}
                  className="flex flex-col gap-6 pb-8 border-b border-gray-200 sm:flex-row group"
                >
                  {/* Product image */}
                  <div className="w-full sm:w-36 md:w-44 aspect-[3/4] overflow-hidden bg-gray-100">
                    <img
                      src={productData.images?.[0]}
                      alt={productData.name}
                      className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Product details */}
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 sm:text-xl">
                          {productData.name}
                        </h3>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
                          Size: {item.size}
                        </p>
                      </div>

                      <p className="text-base text-gray-900 sm:text-lg">
                        {currency}
                        {productData.price}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-gray-300">
                        <button
                          onClick={() =>
                            item.quantity > 1 &&
                            updateQuantity(item._id, item.size, item.quantity - 1)
                          }
                          className="px-4 py-2 text-lg text-gray-700 transition hover:bg-gray-100"
                        >
                          -
                        </button>

                        <input
                          onChange={(e) =>
                            e.target.value === "" || e.target.value === "0"
                              ? null
                              : updateQuantity(
                                  item._id,
                                  item.size,
                                  Number(e.target.value)
                                )
                          }
                          className="w-12 py-2 text-center border-l border-r border-gray-300 outline-none"
                          type="number"
                          min={1}
                          value={item.quantity}
                        />

                        <button
                          onClick={() =>
                            updateQuantity(item._id, item.size, item.quantity + 1)
                          }
                          className="px-4 py-2 text-lg text-gray-700 transition hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => updateQuantity(item._id, item.size, 0)}
                        className="flex items-center gap-2 text-gray-500 transition hover:text-red-600"
                      >
                        <img
                          src={assets.bin_icon}
                          className="w-4 sm:w-5"
                          alt="Remove"
                        />
                        <span className="hidden sm:inline text-xs uppercase tracking-[0.2em]">
                          Remove
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Summary */}
          <aside className="w-full lg:w-[420px]">
            <div className="p-6 bg-white border border-gray-200 sm:p-8 lg:sticky lg:top-24">
              <h2 className="pb-4 mb-6 text-2xl text-gray-900 border-b prata-regular">
                Summary
              </h2>

              <CartTotal />

              {/* Promo */}
              <div className="mt-8">
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
                  Promo Code
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="ENTER CODE"
                    className="w-full px-2 py-3 text-sm border-b border-gray-300 outline-none focus:border-black"
                  />
                  <button className="text-xs uppercase tracking-[0.2em] text-gray-700 hover:text-black transition">
                    Apply
                  </button>
                </div>
              </div>

              <button
                onClick={() => navigate("/place-order")}
                className="w-full bg-black text-white text-xs uppercase tracking-[0.2em] px-8 py-4 mt-8 hover:bg-gray-800 transition"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate("/collection")}
                className="w-full mt-4 text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-black transition"
              >
                Continue Shopping
              </button>
            </div>
          </aside>
        </div>
      ) : (
        /* Empty cart state */
        <div className="py-20 text-center">
          <div className="max-w-md mx-auto">
            <img
              src={assets.cart_icon || assets.bin_icon}
              alt="Empty cart"
              className="mx-auto mb-6 w-14 opacity-40"
            />
            <h2 className="mb-4 text-3xl text-gray-900 prata-regular">
              Your cart is currently empty
            </h2>
            <p className="mb-8 text-sm text-gray-500 sm:text-base">
              Discover our latest collections and find the perfect pieces for
              your wardrobe.
            </p>
            <button
              onClick={() => navigate("/collection")}
              className="bg-black text-white px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-gray-800 transition"
            >
              Start Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;