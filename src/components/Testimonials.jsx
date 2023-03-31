import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
  let reviews = props.review;
  const [index, setIndex] = useState(0);

  const LeftShiftHandler = () => {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const RightShiftHandler = () => {
    if (index + 1 > reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const SurpriseHandler = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };

  return (
    <div className="w-[85vw] md:w-[700px] bg-white fleex flex-col justify-center items-center mt-10 p-10 transition-all  duration-700 hover:shadow-2xl">
      <Card review={reviews[index]} />

      <div className="flex text-3xl mt-5 mb-4 gap-3 text-violet-400 font-bold mx-auto justify-center">
        <button
          onClick={LeftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={RightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>
      <div>
        <button
          onClick={SurpriseHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all  duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg "
        >
          Surprise me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
