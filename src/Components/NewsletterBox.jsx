import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="px-4 py-16 bg-white sm:px-6 lg:px-10 sm:py-20">
      <div className="max-w-2xl mx-auto text-center">
        
        <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-4">
          Stay Updated
        </p>

        <h2 className="mb-4 text-3xl text-gray-900 prata-regular sm:text-4xl">
          Get 20% off your first order
        </h2>

        <p className="mb-10 text-sm text-gray-600 sm:text-base">
          Subscribe to receive updates on new arrivals, exclusive offers, and
          fashion inspiration straight to your inbox.
        </p>

        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center justify-center max-w-md mx-auto sm:flex-row"
        >
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            required
            className="w-full px-3 py-4 text-sm tracking-widest border-b border-gray-300 outline-none focus:border-black"
          />

          <button
            type="submit"
            className="bg-black text-white px-8 py-4 text-xs uppercase tracking-[0.2em] mt-4 sm:mt-0 sm:ml-4 hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
};

export default NewsletterBox;