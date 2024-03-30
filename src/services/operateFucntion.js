import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import type { CustomFlowbiteTheme } from "flowbite-react";


export const imageAttGenFunction = (att) => {
  let imgSRC = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_${att}.png`;
  return imgSRC;
};

export const genStarFunction = (currStar) => {
  const capStar = 3;
  let complexStar = [];
  if (currStar < 3) {
    let loop = capStar - currStar;
    for (let index = 0; index < loop; index++) {
      complexStar.push(
        <FontAwesomeIcon icon={faStar} style={{ color: "grey" }} key={index - capStar} />
      );
    }
    for (let index = 0; index < currStar; index++) {
      complexStar.push(
        <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} key={index - currStar} />
      );
    }
  } else {
    for (let index = 0; index < currStar; index++) {
      complexStar.push(
        <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} key={index - currStar} />
      );
    }
  }
  return complexStar;
};


export const generatePillBg = async (index) => {
  const primaryStatColor = ["red", "lime", "indigo", "yellow"];
  let color = primaryStatColor[parseInt(index)];
  let pillsBg = `rounded-lg bg-cyan-600 text-black bg-${color}-400`;
  let customTheme: CustomFlowbiteTheme["tabs"] = {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center",
      styles: {
        default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
        underline:
          "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
        pills: "flex-wrap space-x-2 text-sm font-medium text-gray-500 ",
        fullWidth:
          "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium  shadow dark:divide-gray-700 dark:text-gray-400 text-red-500",
      },
      tabitem: {
        base: "flex items-center justify-center rounded-t-lg p-2 my-[5px] text-sm font-medium first:ml-0 focus:outline-none  disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        styles: {
          pills: {
            base: "",
            active: {
              on: pillsBg,
              off: "rounded-lg bg-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white",
            },
          },
        },
        icon: "mr-2 h-5 w-5",
      },
    },
    tabitemcontainer: {
      base: "",
      styles: {
        default: "",
        underline: "",
        pills: "",
        fullWidth: "",
      },
    },
    tabpanel: "py-1",
  };

  return new Promise((resolve, reject) => {
    resolve(customTheme)
  })
}