import React from "react";

const NavBarDetailPage = ({ id }) => {
  let previousButtonDisplay = "";
  let nextButtonDisplay = "";
  if (id === 1) {
    previousButtonDisplay = "invisible";
  }

  if (id === 138) {
    nextButtonDisplay = "invisible";
  }

  const goToNextPageHandler = () => {
    const nextId = parseInt(id) + 1;
    window.location.href = `/detail/${nextId}`;
  };
  const goToPrevPageHandler = () => {
    const prevId = parseInt(id) - 1;
    window.location.href = `/detail/${prevId}`;
  };
  const goToHomePageHandler = () => {
    window.location.href = `/`;
  };

  return (
    <div className="grid grid-cols-3 bg-black h-[50px] justify-evenly opacity-50 hover:opacity-100">
      <button
        onClick={goToPrevPageHandler}
        className={`hover:bg-red-400 w-full font-mono font-black text-red-400 hover:scale-110 hover:text-white ${previousButtonDisplay} `}
      >
        Previous
      </button>

      <button
        onClick={goToHomePageHandler}
        className="hover:bg-blue-400 w-full font-mono font-black text-blue-400 hover:scale-110 hover:text-white h-[full]"
      >
        Home
      </button>

      <button
        onClick={goToNextPageHandler}
        className={`hover:bg-green-400 w-full font-mono font-black text-green-400 hover:scale-110 hover:text-white  ${nextButtonDisplay}`}
      >
        Next
      </button>
    </div>
  );
};

export default NavBarDetailPage;
