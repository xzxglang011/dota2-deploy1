import { redirect, redirectDocument } from "react-router-dom";

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
    let navigatePlusID;
    switch (id) {
      case 23:
        navigatePlusID = 24;
        break;
      case 114:
        navigatePlusID = 118;
        break;
      case 121:
        navigatePlusID = 122;
        break;
      case 123:
        navigatePlusID = 125;
        break;
      case 126:
        navigatePlusID = 127;
        break;
      case 129:
        navigatePlusID = 134;
        break;
      default:
        navigatePlusID = id;
        break;
    }
    const nextId = parseInt(navigatePlusID) + 1;
    window.location.href = `/detail/${nextId}`;
  };
  const goToPrevPageHandler = () => {
    let navigateMinusID;
    switch (id) {
      case 25:
        navigateMinusID = 24;
        break;
      case 119:
        navigateMinusID = 115;
        break;
      case 123:
        navigateMinusID = 122;
        break;
      case 126:
        navigateMinusID = 124;
        break;
      case 128:
        navigateMinusID = 127;
        break;
      case 135:
        navigateMinusID = 130;
        break;
      default:
        navigateMinusID = id;
        break;
    }
    const prevId = parseInt(navigateMinusID) - 1;
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
