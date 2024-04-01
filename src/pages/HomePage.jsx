import React, { useState, useEffect } from "react";
import fetchHeroList from "../services/fetchHeroList";
import ReactLoading from "react-loading";
import HeroCard from "../components/HeroCard";

const HomePage = () => {
  //State for render
  const [fetchData, setFetchData] = useState([]);
  const [herosList, setHerosList] = useState([]);
  const [loading, setLoading] = useState(true);
  //State for filter
  const [selectedOption1, setSelectedOption1] = useState("default");
  const [selectedOption2, setSelectedOption2] = useState("default");
  const [inputName, setInputName] = useState("");

  //Render data first time that page load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHeroList(); // Fetch heroes data

        setHerosList(data); // Set the fetched data in state
        setFetchData(data); //Store back up fetch data
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading state to false in case of error
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);
  //Handler input
  const inputHandler = (event) => {
    setInputName(event?.target?.value);
  };
  //Handler option1
  const option1Handler = (event) => {
    setSelectedOption1(event.target.value);
  };
  //Handler option2
  const option2Handler = (event) => {
    setSelectedOption2(event.target.value);
  };
  //Filter data
  function filterData(option1, option2, input) {
    let filteredData = fetchData;

    // Filter based on selected option1
    if (option1 !== "default") {
      filteredData = filteredData?.filter((hero) => {
        return parseInt(option1) === hero.primary_attr;
      });
    }
    // Filter based on selected option2
    if (option2 !== "default") {
      filteredData = filteredData?.filter((hero) => {
        return parseInt(option2) === hero.complexity;
      });
    }
    // Filter based on input
    if (input.length > 0) {
      filteredData = filteredData.filter((hero) =>
        hero.name_loc.toLowerCase().includes(input.toLowerCase())
      );
    }

    return filteredData;
  }

  useEffect(() => {
    const newData = filterData(selectedOption1, selectedOption2, inputName);
    setHerosList(newData);
  }, [selectedOption1, selectedOption2, inputName]);

  return (
    <div className="flex flex-col w-[100%] justify-center items-center ">
      <h1 className="text-6xl text-red-500 m-[20px] text-center">
        List of Heroes
      </h1>
      <div className="grid gap-5  md:grid-cols-2  xl:grid-cols-4  ">
        <div className="text-white w-[250px] flex bg-red-900 rounded-lg text-center">
          <span className="m-[auto] p-[auto]">Filter Heros </span>
        </div>
        <select
          id="selectOption1"
          value={selectedOption1}
          onChange={option1Handler}
        >
          <option value="default">All stat</option>
          <option value="0">Str</option>
          <option value="1">Agi</option>
          <option value="2">Int</option>
          <option value="3">Universal</option>
        </select>
        <select
          id="selectOption2"
          value={selectedOption2}
          onChange={option2Handler}
        >
          <option value="default">complexity </option>
          <option value="1">Beginner</option>
          <option value="2">Intermediate</option>
          <option value="3">Advanced</option>
        </select>
        <input
          className="rounded-lg"
          type="text"
          placeholder="Input hero name"
          value={inputName}
          onChange={(event) => {
            inputHandler(event);
          }}
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center w-[100%] h-[100vh]">
          <ReactLoading type="spin" color="green" />
        </div>
      ) : (
        <div className="mt-[20px] max-w-[1100px]">
          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  ">
            {herosList.map((hero) => (
              <HeroCard hero={hero} key={hero.name_loc} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HomePage;
