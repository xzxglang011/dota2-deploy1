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
          <Tabs.Item active title={ability.name_loc} key={index}>
            <div className="text-sm text-gray-500 dark:text-gray-400 bg-slate-400 w-[100%] min-h-[250px] opacity-90 flex flex-col rounded-xl overflow-hidden">
              <div className="flex">
                <div className="ability-Img  w-[150px]">
                  <LoadingImage imageUrl={ability.thumb_image} />
                </div>
                <h1 className="w-full break-words inline-block text-black p-[10px] font-sans text-lg/[20px]">
                  {ability.desc_loc}
                </h1>
                <div className=" px-[10px]"></div>
              </div>
            </div>
          </Tabs.Item>
        );
      })}
    </Tabs>
  );
}

export default SkillsTab;
