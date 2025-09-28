import React from "react";
import { DNA } from "react-loader-spinner";
const DNASpiner = () => {
  return (
    <div className="flex justify-center items-center md:mt-[150px]">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      ></DNA>
    </div>
  );
};

export default DNASpiner;
