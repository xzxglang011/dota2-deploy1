import LoadingImage from "./LoadingImage";
import {
  genStarFunction,
  imageAttGenFunction,
} from "../services/operateFucntion";
import SkillsTab from "./SkillsTab";
import LoadingVideo from "./LoadingVideo";
import HeroRoleDisplay from "./HeroRoleDisplay";

const HeroDetailDisplay = ({ heroData }) => {
  const primaryStatColor = ["red", "lime", "aqua", "orange"];
  const primaryStat = ["strength", "agility", "intelligence", "universal"];
  return (
    <div className="text-white max-w[1200px] grid sm:grid-cols-1 xl:grid-cols-2">
      <div className="heroImg min-w-[250px] w-[100%] h-full">
        <div className="flex justify-center items-center w-[100%]  ">
          <LoadingVideo url={heroData.thumb_video} />
        </div>
      </div>
      <div className=" m-auto sm:text-m s:w-full md:text-xl xl:text-2xl w-[75%]">
        <div className="m-auto px-[10px]">
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
          <div className="pt-[10px] border-b bg-black opacity-85">
            <HeroRoleDisplay
              roles={heroData.roles}
              index={heroData.primary_attr}
            />
          </div>
          <div className="flex w-[100%]">
            <SkillsTab abilities={heroData.abilities} heroData={heroData} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroDetailDisplay;
