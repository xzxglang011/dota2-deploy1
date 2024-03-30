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
      <img
        className="w-[100%] "
        src={imageUrl}
        alt=""
        onLoad={() => loadingHandler()}
        style={{ display: loading ? "none" : "block" }}
      />
    </div>
  );
}

export default LoadingImage;
