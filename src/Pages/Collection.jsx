import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import ProductItem from "../Components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProduct(productCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProduct.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProduct(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  const clearFilters = () => {
    setCategory([]);
    setSubCategory([]);
    setSortType("relevant");
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="min-h-screen border-t">
      {/* Header */}
      <section className="px-4 pt-12 pb-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-screen-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">
            The New Season Essentials
          </p>
          <h1 className="text-4xl text-gray-900 prata-regular sm:text-5xl lg:text-6xl">
            Collections
          </h1>
        </div>
      </section>

      <div className="flex flex-col gap-10 px-4 pb-20 mx-auto max-w-screen-2xl sm:px-6 lg:px-10 md:flex-row lg:gap-14">
        {/* Filters */}
        <aside className="md:w-72 shrink-0">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="md:hidden flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gray-800 mb-4"
          >
            Filters
            <img
              className={`h-3 transition-transform ${
                showFilter ? "rotate-90" : ""
              }`}
              src={assets.dropdown_icon}
              alt=""
            />
          </button>

          <div
            className={`${
              showFilter ? "block" : "hidden"
            } md:block md:sticky md:top-24`}
          >
            <div className="mb-8">
              <h2 className="text-2xl text-gray-900 prata-regular">Filters</h2>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mt-1">
                Refine Selection
              </p>
            </div>

            {/* Category */}
            <div className="pb-5 mb-5 border-b border-gray-200">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-900 mb-4">
                Category
              </p>

              <div className="flex flex-col gap-3 text-sm text-gray-600">
                {["Men", "Women", "Kids"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={item}
                      checked={category.includes(item)}
                      onChange={toggleCategory}
                      className="w-4 h-4"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Subcategory */}
            <div className="pb-5 mb-5 border-b border-gray-200">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-900 mb-4">
                Type
              </p>

              <div className="flex flex-col gap-3 text-sm text-gray-600">
                {[
                  "Topwear",
                  "Bottomwear",
                  "Winterwear",
                  "Footwear",
                  "Bags",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={item}
                      checked={subCategory.includes(item)}
                      onChange={toggleSubCategory}
                      className="w-4 h-4"
                    />
                    {item === "Topwear"
                      ? "Top wear"
                      : item === "Bottomwear"
                      ? "Bottom wear"
                      : item === "Winterwear"
                      ? "Winter wear"
                      : item === "Footwear"
                      ? "Foot wear"
                      : item}
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={clearFilters}
              className="text-[11px] uppercase tracking-[0.2em] text-gray-500 hover:text-black transition border-b border-transparent hover:border-black pb-1"
            >
              Clear All
            </button>
          </div>
        </aside>

        {/* Results */}
        <section className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-col justify-between gap-6 mb-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-3">
                Showing {filterProduct.length} result
                {filterProduct.length !== 1 ? "s" : ""}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-[11px] uppercase tracking-[0.15em] text-gray-700"
                  >
                    {item}
                    <button
                      onClick={() =>
                        setCategory((prev) =>
                          prev.filter((cat) => cat !== item)
                        )
                      }
                      className="text-xs"
                    >
                      ×
                    </button>
                  </span>
                ))}

                {subCategory.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-[11px] uppercase tracking-[0.15em] text-gray-700"
                  >
                    {item}
                    <button
                      onClick={() =>
                        setSubCategory((prev) =>
                          prev.filter((sub) => sub !== item)
                        )
                      }
                      className="text-xs"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full sm:w-auto">
              <label className="block text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                Sort by
              </label>
              <select
                onChange={(e) => setSortType(e.target.value)}
                value={sortType}
                className="w-full py-2 text-sm bg-transparent border-b border-gray-300 outline-none sm:w-56 focus:border-black"
              >
                <option value="relevant">Featured</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Empty state */}
          {filterProduct.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <h2 className="mb-4 text-3xl text-gray-900 prata-regular">
                No products match your filters
              </h2>
              <p className="max-w-md mb-8 text-sm text-gray-500">
                Try adjusting your selection or clear all filters to explore
                more products.
              </p>
              <button
                onClick={clearFilters}
                className="border border-gray-300 px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white hover:border-black transition"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
              {filterProduct.map((item, index) => (
                <div
                  key={index}
                  className="transition duration-300 hover:-translate-y-1"
                >
                  <ProductItem
                    name={item.name}
                    id={item._id}
                    price={item.price}
                    image={item.images?.[0]}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Collection;