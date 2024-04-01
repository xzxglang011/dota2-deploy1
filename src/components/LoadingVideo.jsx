import React, { useState } from "react";
import ReactLoading from "react-loading";

function LoadingVideo({ url }) {
  const [loading, setLoading] = useState(true);

  const handleVideoLoad = () => {
    setLoading(false);
  };

  return (
    <div className="h-[100%] relative">
      {loading && (
        <div className="flex justify-center items-center w-[100%] h-[100vh]">
          <ReactLoading type="spin" color="green" />
        </div>
      )}
      <video
        autoPlay
        muted
        loop
        className="h-[100%]"
        onLoadedData={handleVideoLoad}
      >
        <source src={url} type="video/webm" />
      </video>
    </div>
  );
}

export default LoadingVideo;