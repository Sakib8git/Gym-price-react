import { Circle, CircleCheckBig } from "lucide-react";
import React, { use } from "react";

const PricingCon = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div className=" md:grid grid-cols-3 container mx-auto pt-5 mt-14">
      {pricingData.map((card, index) => (
        <div
          key={index}
          className="card w-96 bg-base-100 shadow-sm  hover:shadow-2xl mb-5 "
        >
          <div className="card-body">
            {card.recommended ? (
              <span className="badge badge-lg badge-warning text-lg ">
                🎖️ Most Popular
              </span>
            ) : (
              ""
            )}

            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">{card.planName}</h2>
              <span className="text-xl">TK {card.priceBDT}/mo</span>
            </div>

            <div className="flex flex-col  h-full">
              <div className="flex-1">
                <ul className="mt-6 flex flex-col gap-2 text-xs ">
                  <li className="bg-amber-100 p-4 rounded-xl">
                    {card.features.map((feture) => (
                      <p className="mb-2 text-lg flex items-center gap-2"> <CircleCheckBig></CircleCheckBig> {feture}</p>
                    ))}
                  </li>
                </ul>
              </div>
              <div className="mt-6 ">
                <button className="btn btn-primary btn-block">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCon;
