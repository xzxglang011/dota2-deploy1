import { Link } from "react-router-dom";
import {
  genStarFunction,
  imageAttGenFunction,
} from "../../src/services/operateFucntion";

function HeroCard({ hero }) {
  const primaryStat = ["strength", "agility", "intelligence", "universal"];
  const primaryStatColor = ["red", "green", "aqua", "orange"];

  return (
    <li key={`${hero.id}${hero.name_loc}`}>
      <Link to={`/detail/${hero.id}`}>
        <div className="max-w-[200px]   bg-transparent border border-gray-200 rounded-lg   hover:scale-110 hover:text-lime-300 text-white hover:border-lime-500">
          <div className="img">
            <img className="rounded-t-lg w-full" src={hero.image} alt="" />
          </div>
          <div className="p-[10px] ">
            <div className="flex justify-between align-middle ">
              <h4 className="mb-2 text-2xl font-bold tracking-tight  min-h-[65px] ">
                <span>{hero.name_loc}</span>
              </h4>
              <img
                src={imageAttGenFunction(primaryStat[hero.primary_attr])} //)
                alt=""
                className="w-[40px] h-[40px] flex justify-between align-middle"
              />
            </div>
            <div className="star flex justify-between">
              <span
                style={{
                  color: `${primaryStatColor[hero.primary_attr]}`,
                  textTransform: "capitalize",
                }}
              >
                {primaryStat[hero.primary_attr]}
              </span>
              <span className="">{genStarFunction(hero.complexity)}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
export default HeroCard;
