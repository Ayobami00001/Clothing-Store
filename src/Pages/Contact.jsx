import React from "react";
import { assets } from "../assets/assets";
import NewsletterBox from "../Components/NewsletterBox";

const Contact = () => {
  return (
    <div className="border-t">
      {/* Header */}
      <section className="px-4 pt-16 text-center sm:px-6 lg:px-10 pb-14">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
          Get In Touch
        </p>
        <h1 className="text-4xl text-gray-900 prata-regular sm:text-5xl lg:text-6xl">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-sm leading-7 text-gray-600 sm:text-base">
          We’d love to hear from you. Our team is here to help with your
          questions, orders, and support needs.
        </p>
      </section>

      {/* Contact info cards */}
      <section className="px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
          <div className="p-8 text-center bg-white border border-gray-200">
            <div className="flex justify-center mb-5">
              <div className="flex items-center justify-center w-12 h-12 text-xl bg-gray-100">
                📍
              </div>
            </div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gray-500">
              Our Store
            </p>
            <p className="text-sm leading-7 text-gray-700">
              54709 Willms Station
              <br />
              Suite 350, Ibadan, Nigeria
            </p>
          </div>

          <div className="p-8 text-center bg-white border border-gray-200">
            <div className="flex justify-center mb-5">
              <div className="flex items-center justify-center w-12 h-12 text-xl bg-gray-100">
                ✉️
              </div>
            </div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gray-500">
              Email
            </p>
            <p className="text-sm leading-7 text-gray-700 break-all">
              ayobamiibrahim27@gmail.com
            </p>
          </div>

          <div className="p-8 text-center bg-white border border-gray-200">
            <div className="flex justify-center mb-5">
              <div className="flex items-center justify-center w-12 h-12 text-xl bg-gray-100">
                ☎️
              </div>
            </div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gray-500">
              Phone
            </p>
            <p className="text-sm leading-7 text-gray-700">
              (+234) 9025-256040
              <br />
              Mon — Sat, 9am — 6pm
            </p>
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <section className="bg-[#fafafa] px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid items-stretch max-w-6xl grid-cols-1 gap-10 mx-auto lg:grid-cols-2">
          {/* Left image/info */}
          <div className="overflow-hidden bg-gray-100">
            <img
              className="object-cover w-full h-full"
              src={assets.contact_img}
              alt="Contact"
            />
          </div>

          {/* Form */}
          <div className="p-8 bg-white shadow-sm sm:p-10 lg:p-12">
            <div className="mb-10">
              <h2 className="mb-3 text-3xl text-gray-900 prata-regular sm:text-4xl">
                Send a Message
              </h2>
              <div className="h-px bg-gray-300 w-14"></div>
            </div>

            <form className="space-y-8">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-500">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b border-gray-300 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-500">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@domain.com"
                  className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b border-gray-300 outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-500">
                  Subject
                </label>
                <select className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b border-gray-300 outline-none focus:border-black">
                  <option>General Inquiry</option>
                  <option>Order Inquiry</option>
                  <option>Shipping Question</option>
                  <option>Returns & Exchange</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-500">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we assist you today?"
                  className="w-full px-0 py-3 text-sm bg-transparent border-0 border-b border-gray-300 outline-none resize-none focus:border-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl text-gray-900 prata-regular sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-900">
                Shipping
              </h3>
              <p className="text-sm leading-7 text-gray-600">
                Orders are usually processed within 24–48 hours. Delivery times
                may vary depending on your location and selected shipping method.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-900">
                Returns
              </h3>
              <p className="text-sm leading-7 text-gray-600">
                Items in original condition can be returned or exchanged within
                7 days, based on our return policy.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-900">
                Product Support
              </h3>
              <p className="text-sm leading-7 text-gray-600">
                Need help with sizing, orders, or product details? Reach out and
                our support team will assist you as quickly as possible.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-gray-900">
                Careers
              </h3>
              <p className="text-sm leading-7 text-gray-600">
                Interested in working with us? We’re always open to passionate,
                creative, and customer-focused talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBox />
    </div>
  );
};

export default Contact;