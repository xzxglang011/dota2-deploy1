import React from "react";
import { useEffect, useState } from "react";
import { Rating } from "flowbite-react";

function HeroRoleDisplay({ roles }) {
  const {
    Carry: carry,
    Support: support,
    Nuker: nuker,
    Disabler: disabler,
    Jungler: jungler,
    Durable: durable,
    Escape: escape,
    Pusher: pusher,
    Initiator: initator,
  } = roles;

  function genPercent(num, name) {
    return { value: Math.ceil(num * 33.3), name: name };
  }

  const percentagesArray = [
    genPercent(carry, "carry"),
    genPercent(support, "support"),
    genPercent(nuker, "nuker"),
    genPercent(disabler, "disabler"),
    genPercent(jungler, "jungler"),
    genPercent(durable, "durable"),
    genPercent(escape, "escape"),
    genPercent(pusher, "pusher"),
    genPercent(initator, "initator"),
  ];
  return (
    <div>
      {percentagesArray.map((arr, index) => {
        return (
          <Rating.Advanced
            percentFilled={arr.value}
            className="mb-2"
            key={index}
          >
            <h1 className="text-white w-[75px] pl-2 capitalize">{arr.name}</h1>
          </Rating.Advanced>
        );
      })}
    </div>
  );
}

export default HeroRoleDisplay;
