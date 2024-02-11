import React from "react";

const Review = () => {
  return (
    <div className="flex">
      <div className="bg-green-600 flex items-center justify-center py-[0.2%] px-2 rounded-sm">
        <h2 className="text-white relative top-[-5%] font-bold text-sm mr-1">4.3</h2>
        <div className="rating sm:h-5 h-3 w-3 sm:w-5 bg-white "></div>
      </div>
      <div>
        <h1 className="sm:ml-5 ml-2 text-white text-sm sm:text-lg font-semibold">2,401 Reviews</h1>
      </div>
    </div>
  );
};

export default Review;
