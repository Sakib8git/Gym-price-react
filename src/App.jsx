import { Suspense } from "react";
import "./App.css";
import Navbar from "./Component/navbar";
import PricingCon from "./Component/PricingCon";

import DNASpiner from "./Component/DNASpiner";

function App() {
  const navPromise = fetch("./Nav.json").then((res) => res.json());
  const pricingPromise = fetch("./GymPricing.json").then((res) => res.json());
  // console.log(pricingPromise);

  return (
    <>
      <header className="">
        <Suspense fallback={<p>Loading...</p>}>
          <Navbar navPromise={navPromise}></Navbar>
        </Suspense>
      </header>
      <body className="bg-cyan-100-400 p-10">
        <Suspense fallback={<DNASpiner></DNASpiner>}>
          <PricingCon pricingPromise={pricingPromise}></PricingCon>
        </Suspense>
      </body>
    </>
  );
}

export default App;
