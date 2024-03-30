import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import fetchHeroData from "../services/fetchHeroData";
import NavBarDetailPage from "../components/NavBarDetailPage";
import HeroDetailDisplay from "../components/HeroDetailDisplay";

const HeroDetailPage = () => {
  const { id } = useParams();

  //State for render
  const [heroData, setHeroData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await fetchHeroData(id);
        setHeroData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center w-[100%] h-[100vh]">
          <ReactLoading type="spin" color="green" />
        </div>
      ) : (
        <div>
          <NavBarDetailPage id={heroData.id} />
          <HeroDetailDisplay heroData={heroData} />
        </div>
      )}
    </div>
  );
};

export default HeroDetailPage;
