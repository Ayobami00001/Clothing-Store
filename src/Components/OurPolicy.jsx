import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <section className="bg-[#f9f9f9] border-y border-gray-200 px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Policy 1 */}
        <div className="flex flex-col items-center">
          <img
            src={assets.exchange_icon}
            className="w-12 mb-6"
            alt="Exchange"
          />
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-900 mb-3">
            Easy Exchange
          </h4>
          <p className="text-sm text-gray-600 max-w-[220px]">
            Hassle-free exchange policy to ensure you always get the perfect fit.
          </p>
        </div>

        {/* Policy 2 */}
        <div className="flex flex-col items-center">
          <img
            src={assets.quality_icon}
            className="w-12 mb-6"
            alt="Return"
          />
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-900 mb-3">
            7 Days Return
          </h4>
          <p className="text-sm text-gray-600 max-w-[220px]">
            Enjoy a 7-day free return policy with no stress or hidden charges.
          </p>
        </div>

        {/* Policy 3 */}
        <div className="flex flex-col items-center">
          <img
            src={assets.support_img}
            className="w-12 mb-6"
            alt="Support"
          />
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-900 mb-3">
            24/7 Support
          </h4>
          <p className="text-sm text-gray-600 max-w-[220px]">
            Our support team is always available to help you anytime, anywhere.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurPolicy;