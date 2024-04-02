import React, { useState } from "react";
import ReactLoading from "react-loading";

function LoadingImage({ imageUrl, h }) {
  const [loading, setLoading] = useState(true);
  const loadingHandler = () => {
    setLoading(false);
  };
  let displayClass = "";
  if (h !== undefined) {
    displayClass = "flex justify-center items-center w-[100%] h-[100vh]";
  }

  return (
    <div>
      {loading && (
        <div className={displayClass}>
          <ReactLoading type="spin" color="green" />
        </div>
      )}
      <div className="flex w-full items-center justify-center sm:w-full sm:block sm:h-full">
        <img
          src={imageUrl}
          alt=""
          onLoad={() => loadingHandler()}
          style={{ display: loading ? "none" : "block" }}
          className="w-[75px] h-[75px] sm:w-[150px] sm:h-[150px]"
        />
      </div>
    </div>
  );
}

export default LoadingImage;
