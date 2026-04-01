import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 8));
  }, [products]);

  return (
    <section className="px-4 py-16 bg-white sm:px-6 lg:px-10 sm:py-20">
      <div className="flex flex-col gap-6 mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
            New Arrivals
          </p>
          <h2 className="text-3xl text-gray-900 prata-regular sm:text-4xl">
            Latest Collection
          </h2>
          <div className="mt-3 h-[2px] w-20 bg-gray-900"></div>
        </div>

        <p className="max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
          Discover our newest fashion pieces, carefully selected to bring you
          modern style, comfort, and everyday elegance.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {latestProducts.map((item, index) => (
          <div
            key={index}
            className="transition duration-300 hover:-translate-y-1"
          >
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

export default LatestCollection;