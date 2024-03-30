import LoadingImage from "./LoadingImage";
import {
  genStarFunction,
  imageAttGenFunction,
} from "../services/operateFucntion";
import SkillsTab from "./SkillsTab";

const HeroDetailDisplay = ({ heroData }) => {
  const primaryStatColor = ["red", "lime", "aqua", "orange"];
  const primaryStat = ["strength", "agility", "intelligence", "universal"];
  return (
    <div className="text-white max-w[1200px] grid sm:grid-cols-1 xl:grid-cols-2">
      <div className="heroImg min-w-[250px] w-[100%]">
        <div className="flex justify-center items-center w-[100%] ">
          <LoadingImage imageUrl={heroData.thumb_image} h={"100vh"} />
        </div>
      </div>
      <div className=" m-auto sm:text-m s:w-full md:text-xl xl:text-2xl w-[80%]">
        <h1>
          {heroData.name_loc}
          <span> {genStarFunction(heroData.complexity)}</span>
          <p
            className="capitalize"
            style={{
              color: primaryStatColor[parseInt(heroData.primary_attr)],
            }}
          >
            <img
              src={imageAttGenFunction(primaryStat[heroData.primary_attr])}
              alt=""
            />
            {primaryStat[heroData.primary_attr]}
          </p>
        </h1>
        <span>
          Role :
          {heroData.roles?.Carry || 0 > heroData.roles?.Support
            ? " Core"
            : " Support"}
        </span>
        <h1>Hero's concept : {heroData.npe_desc_loc} </h1>
        <h1 className="border-b pb-3">
          Attack Range : {heroData.attack_range} Type :
          {heroData.attack_range > 300 ? " Range" : " Melee"}
        </h1>

        <SkillsTab abilities={heroData.abilities} heroData={heroData} />
      </div>
    </div>
  );
};
export default HeroDetailDisplay;
