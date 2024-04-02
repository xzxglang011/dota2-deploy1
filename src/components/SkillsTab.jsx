import { Tabs } from "flowbite-react";
import LoadingImage from "./LoadingImage";
import { useEffect, useState } from "react";
import { generatePillBg } from "../services/operateFucntion";

function SkillsTab({ abilities, heroData }) {
  const [attColor, setAttColor] = useState({});

  useEffect(() => {
    //Gen custom theme for <Tabs/>
    async function genMarkUp() {
      let pillBg = await generatePillBg(heroData.primary_attr);
      setAttColor(pillBg);
    }
    genMarkUp();
  }, []);

  return (
    <Tabs aria-label="Pills" style="pills" theme={attColor}>
      {abilities.map((ability, index) => {
        return (
          <Tabs.Item
            active
            title={ability.name_loc}
            key={index}
            className="w-full"
          >
            <div className="text-sm text-gray-500 dark:text-gray-400 bg-slate-400 w-[100%]  sm:h-[150px] opacity-90  rounded-xl sm:overflow-auto box-border scroll-smooth">
              <div className="sm:flex w-full h-full">
                <div className="">
                  <LoadingImage imageUrl={ability.thumb_image} />
                </div>
                <h1
                  className="break-words  text-black flex p-[10px] sm:w-[80%] sm:text-xl"
                  dangerouslySetInnerHTML={{ __html: ability.desc_loc }}
                ></h1>
              </div>
            </div>
          </Tabs.Item>
        );
      })}
    </Tabs>
  );
}

export default SkillsTab;
