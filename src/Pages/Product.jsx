import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../Components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productsData, setProductsData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [activeTab, setActiveTab] = useState("description");

  const fetchProductData = () => {
    const item = products.find((p) => p._id === productId);
    if (item) {
      setProductsData(item);
      setImage(item.images?.[0] || "");
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData();
    }
  }, [productId, products]);

  const handleAddToCart = () => {
    if (productsData.sizes?.length > 0 && !size) {
      alert("Please select a size");
      return;
    }

    addToCart(productsData._id, size);
  };

  return productsData ? (
    <div className="px-4 pt-10 pb-16 transition-opacity duration-500 border-t opacity-100 sm:px-6 lg:px-10">
      {/* Product top section */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left side - images */}
        <div className="flex flex-col-reverse gap-4 sm:flex-row">
          {/* Thumbnails */}
          <div className="flex w-full gap-3 overflow-x-auto sm:flex-col sm:overflow-y-auto sm:w-24">
            {productsData.images?.map((item, index) => (
              <div
                key={index}
                onClick={() => setImage(item)}
                className={`cursor-pointer overflow-hidden border ${
                  image === item ? "border-black" : "border-gray-200"
                }`}
              >
                <img
                  src={item}
                  alt={`product-thumbnail-${index}`}
                  className="w-20 sm:w-full aspect-[3/4] object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 overflow-hidden bg-gray-50">
            <img
              className="object-cover w-full h-full transition duration-500 hover:scale-105"
              src={image || productsData.images?.[0]}
              alt={productsData.name}
            />
          </div>
        </div>

        {/* Right side - details */}
        <div className="flex flex-col">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">
            Premium Collection
          </p>

          <h1 className="mb-4 text-3xl text-gray-900 prata-regular sm:text-4xl">
            {productsData.name}
          </h1>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-1">
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_icon} alt="" className="w-3.5" />
              <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            </div>
            <p className="text-sm text-gray-500">(122 Reviews)</p>
          </div>

          <p className="mb-6 text-2xl font-medium text-gray-900 sm:text-3xl">
            {currency}
            {productsData.price}
          </p>

          <p className="max-w-xl mb-8 text-sm leading-7 text-gray-600 sm:text-base">
            {productsData.description}
          </p>

          {productsData.sizes?.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-800">
                  Select Size
                </p>
                <span className="text-xs uppercase tracking-[0.15em] text-gray-500">
                  Choose your fit
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {productsData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`min-w-[52px] border px-4 py-3 text-sm transition ${
                      item === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 bg-white text-gray-800 hover:border-black"
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4 mb-10 sm:flex-row">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>

            <button className="border border-gray-300 px-8 py-4 text-xs uppercase tracking-[0.2em] text-gray-700 hover:border-black hover:text-black transition">
              Wishlist
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-8 text-center border-t sm:grid-cols-3 sm:text-left">
            <div className="p-4 border border-gray-200">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-800 mb-2">
                Original
              </p>
              <p className="text-sm text-gray-500">100% original product.</p>
            </div>

            <div className="p-4 border border-gray-200">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-800 mb-2">
                Payment
              </p>
              <p className="text-sm text-gray-500">
                Cash on delivery available.
              </p>
            </div>

            <div className="p-4 border border-gray-200">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-800 mb-2">
                Returns
              </p>
              <p className="text-sm text-gray-500">
                Easy 7 days return and exchange.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="mt-20">
        <div className="flex flex-wrap border-b border-gray-200">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-5 py-3 text-sm transition ${
              activeTab === "description"
                ? "border-b-2 border-black font-semibold text-black"
                : "text-gray-500"
            }`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-5 py-3 text-sm transition ${
              activeTab === "reviews"
                ? "border-b-2 border-black font-semibold text-black"
                : "text-gray-500"
            }`}
          >
            Reviews (122)
          </button>
        </div>

        <div className="px-6 py-6 text-sm leading-7 text-gray-600 border border-t-0">
          {activeTab === "description" ? (
            <div className="flex flex-col gap-4">
              <p>
                An e-commerce website is an online platform that facilitates the
                buying and selling of products or services over the internet. It
                serves as a virtual marketplace where businesses and individuals
                can showcase their products, interact with customers, and
                conduct transactions without the need for a physical presence.
              </p>
              <p>
                E-commerce websites typically display products or services along
                with detailed descriptions, images, prices, and any available
                variations such as sizes and colors. Each product usually has
                its own dedicated page with relevant information.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="pb-4 border-b">
                <p className="font-medium text-gray-900">Sarah M.</p>
                <p className="mb-2 text-xs text-gray-500">Verified Buyer</p>
                <p>
                  Beautiful quality and the fit is amazing. The material feels
                  premium and exactly as expected.
                </p>
              </div>

              <div className="pb-4 border-b">
                <p className="font-medium text-gray-900">Daniel A.</p>
                <p className="mb-2 text-xs text-gray-500">Verified Buyer</p>
                <p>
                  Very stylish product. Delivery was smooth and the size matched
                  perfectly.
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Grace T.</p>
                <p className="mb-2 text-xs text-gray-500">Verified Buyer</p>
                <p>
                  I love the overall finish. It looks even better in person.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related products */}
      <RelatedProduct
        category={productsData.category}
        subCategory={productsData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0">Loading...</div>
  );
};

export default Product;