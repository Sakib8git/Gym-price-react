import React, { use } from "react";

const PricingCon = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div className=" md:grid grid-cols-3 container mx-auto pt-5 ">
      {pricingData.map((card, index) => (
        <div className="card w-96 bg-base-100 shadow-sm  hover:shadow-2xl ">
          <div className="card-body">
            {card.recommended ? (
              <span className="badge badge-xs badge-warning">
                🎖️ Most Popular
              </span>
            ) : (
              ""
            )}

            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">{card.planName}</h2>
              <span className="text-xl">TK {card.priceBDT}/mo</span>
            </div>

            <div className="flex flex-col">
              <div className="flex-1">
                <ul className="mt-6 flex flex-col gap-2 text-xs ">
                  <li>
                    {card.features.map((feture) => (
                      <p className="mb-2 text-lg">✔️ {feture}</p>
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
