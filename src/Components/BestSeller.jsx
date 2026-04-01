import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 4));
  }, [products]);

  return (
    <section className="bg-[#fafafa] px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
          Most Loved
        </p>
        <h2 className="text-3xl text-gray-900 prata-regular sm:text-4xl">
          Best Sellers
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-sm leading-6 text-gray-600 sm:text-base">
          Explore the pieces our customers love most — timeless styles chosen
          for quality, comfort, and everyday confidence.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bestSeller.map((item, index) => (
          <div
            key={index}
            className="relative p-3 transition duration-300 bg-white rounded-sm shadow-sm hover:-translate-y-1 hover:shadow-md"
          >
            <span className="absolute left-3 top-3 z-10 bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Best Seller
            </span>

            <ProductItem
              id={item._id}
              image={item.images?.[0]}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSeller;