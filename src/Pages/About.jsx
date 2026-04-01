import React from "react";
import { assets } from "../assets/assets";
import NewsletterBox from "../Components/NewsletterBox";

const About = () => {
  return (
    <div className="border-t">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden flex items-center justify-center">
        <img
          src={assets.about_img}
          alt="About us"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 px-6 text-center text-white">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/80">
            Our Story
          </p>
          <h1 className="text-4xl prata-regular sm:text-5xl md:text-6xl lg:text-7xl">
            About Us
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base md:text-lg text-white/90">
            Redefining modern fashion with timeless design and everyday elegance.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="px-4 py-16 bg-white sm:px-6 lg:px-10 sm:py-20 lg:py-24">
        <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
              Our Narrative
            </p>
            <h2 className="mb-8 text-3xl leading-tight text-gray-900 prata-regular sm:text-4xl lg:text-5xl">
              The Story Behind Our Brand
            </h2>

            <div className="space-y-6 text-sm leading-7 text-gray-600 sm:text-base">
              <p>
                Forever was born out of a passion for innovation and a desire to
                transform the way people shop online. Our journey began with a
                simple idea: to create a space where customers can discover
                quality fashion pieces with ease, confidence, and convenience.
              </p>

              <p>
                Since our beginning, we have worked to curate a diverse
                collection of products that blend quality, comfort, and modern
                style. Every piece is selected to help our customers feel
                confident in what they wear every day.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 text-xl text-gray-900 prata-regular">
                  Mission
                </h3>
                <p className="text-sm leading-7 text-gray-600">
                  To empower customers with choice, convenience, and confidence
                  through a seamless shopping experience.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xl text-gray-900 prata-regular">
                  Vision
                </h3>
                <p className="text-sm leading-7 text-gray-600">
                  To become a trusted destination for modern fashion, where
                  quality and simplicity meet timeless style.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-gray-100">
            <img
              src={assets.about_img}
              alt="Brand story"
              className="object-cover w-full h-full transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#fafafa] px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
              Foundations
            </p>
            <h2 className="text-3xl text-gray-900 prata-regular sm:text-4xl lg:text-5xl">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-8 text-center transition bg-white hover:shadow-sm">
              <h4 className="mb-4 text-xl text-gray-900 prata-regular">
                Quality
              </h4>
              <p className="text-sm leading-7 text-gray-600">
                We carefully select every product to ensure it meets high
                standards of quality and durability.
              </p>
            </div>

            <div className="p-8 text-center transition bg-white hover:shadow-sm">
              <h4 className="mb-4 text-xl text-gray-900 prata-regular">
                Innovation
              </h4>
              <p className="text-sm leading-7 text-gray-600">
                We continue to improve the shopping experience through better
                design, technology, and service.
              </p>
            </div>

            <div className="p-8 text-center transition bg-white hover:shadow-sm">
              <h4 className="mb-4 text-xl text-gray-900 prata-regular">
                Customer First
              </h4>
              <p className="text-sm leading-7 text-gray-600">
                Our customers are at the center of everything we do, from
                product selection to delivery support.
              </p>
            </div>

            <div className="p-8 text-center transition bg-white hover:shadow-sm">
              <h4 className="mb-4 text-xl text-gray-900 prata-regular">
                Trust
              </h4>
              <p className="text-sm leading-7 text-gray-600">
                We build long-term relationships through honesty, reliable
                service, and secure shopping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-16 bg-white sm:px-6 lg:px-10 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
              Why Choose Us
            </p>
            <h2 className="text-3xl text-gray-900 prata-regular sm:text-4xl">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 border border-gray-200 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-8 border-b border-gray-200 lg:border-b-0 lg:border-r">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500">
                01. Quality
              </p>
              <h5 className="mb-3 text-lg text-gray-900 prata-regular">
                Premium Materials
              </h5>
              <p className="text-sm leading-7 text-gray-600">
                Carefully chosen fabrics and products designed for comfort and
                long-lasting style.
              </p>
            </div>

            <div className="p-8 border-b border-gray-200 md:border-r lg:border-b-0">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500">
                02. Convenience
              </p>
              <h5 className="mb-3 text-lg text-gray-900 prata-regular">
                Easy Shopping
              </h5>
              <p className="text-sm leading-7 text-gray-600">
                A user-friendly shopping experience that makes browsing and
                ordering simple.
              </p>
            </div>

            <div className="p-8 border-b border-gray-200 lg:border-b-0 lg:border-r">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500">
                03. Support
              </p>
              <h5 className="mb-3 text-lg text-gray-900 prata-regular">
                Customer Care
              </h5>
              <p className="text-sm leading-7 text-gray-600">
                Our team is always ready to assist and ensure your satisfaction
                every step of the way.
              </p>
            </div>

            <div className="p-8">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500">
                04. Confidence
              </p>
              <h5 className="mb-3 text-lg text-gray-900 prata-regular">
                Secure Experience
              </h5>
              <p className="text-sm leading-7 text-gray-600">
                Shop with confidence through trusted payments, clear policies,
                and dependable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="bg-[#fafafa] px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-3xl text-gray-900 prata-regular sm:text-4xl lg:text-5xl">
            Experience our standard.
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-sm leading-7 text-gray-600 sm:text-base">
            Discover fashion designed with quality, confidence, and timeless
            appeal at the center of every piece.
          </p>
        </div>

        <NewsletterBox />
      </section>
    </div>
  );
};

export default About;