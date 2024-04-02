import React, { useState } from "react";
import ReactLoading from "react-loading";

function LoadingVideo({ url }) {
  const [loading, setLoading] = useState(true);

  const handleVideoLoad = () => {
    setLoading(false);
  };

  return (
    <div className="xl:h-[90%] xl:relative h-[75vh]">
      {loading && (
        <div className="flex justify-center items-center w-[90%] h-[80vh]">
          <ReactLoading type="spin" color="green" />
        </div>
      )}
      <video
        autoPlay
        muted
        loop
        className="xl:h-full h-[90%]"
        onLoadedData={handleVideoLoad}
      >
        <source src={url} type="video/webm" />
      </video>
    </div>
  );
}

export default LoadingVideo;
