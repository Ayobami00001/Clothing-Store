import React from "react";
import { Link } from "react-router-dom";
// import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL1CQXHx5cCS4YUGLyhas-yvS-gv6BR5U804tRb5uXkmAF7xj6rutlOkugnM_oEYr-nVxAp07elFG877yLsA9pCP0wFJvr4TkG7NBeopqYGZxU0FM009sYYxdocRDpLEAhh6NpeW11KQilQDcngRG7iaSLHfbJWsvRrkKkCsBVX4IAARO6d9Kh_19hNeP4eA1u9N9sXpL8aA4cwtSneJ6cvjHJxg5ZvBXs-_hl71qRGLrABGHfs46GhSGWvGp2kbiTYxYzJFl9zbc"
        alt="Fashion hero"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 sm:px-10">
        <div className="max-w-3xl text-center text-white">
          <p className="mb-4 text-[11px] font-medium tracking-[0.35em] uppercase sm:text-xs">
            New Season Collection
          </p>

          <h1 className="text-4xl leading-tight prata-regular sm:text-5xl md:text-6xl lg:text-7xl">
            Timeless Style, Modern Fashion
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-sm leading-6 text-white/90 sm:text-base md:text-lg">
            Discover elegant clothing pieces designed for confidence, comfort,
            and everyday luxury.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
            <button className="bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-gray-200">
              Shop Now
            </button>
        <Link to="/collection" >
            <button className="border border-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black">
              Explore Collection
            </button>
        
        </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;