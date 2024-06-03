import React from "react";
import { RubikArray } from "../types/RubikArray";
import Side from "./Side";

const Cube: React.FC<{ rubikArray: RubikArray }> = ({ rubikArray }) => {
  return (
    <div id="cube" className="flex flex-col !gap-[2px]">
      {Object.keys(rubikArray).map((side) => {
        return side == "U" ? (
          <div className="flex flex-row gap-[2px]">
            <div className="!w-[154px] !min-w-[154px] !h-[154px]"></div>
            <Side key={side} name={side} cells={rubikArray[side]} />
          </div>
        ) : (
          <></>
        );
      })}
      <div className="flex flex-row gap-[2px]">
        {Object.keys(rubikArray).map((side) => {
          return side == "F" || side == "R" || side == "B" || side == "L" ? (
            <Side key={side} name={side} cells={rubikArray[side]} />
          ) : (
            <></>
          );
        })}
      </div>
      {Object.keys(rubikArray).map((side) => {
        return side == "D" ? (
          <div className="flex flex-row gap-[2px]">
            <div className="!w-[154px] !min-w-[154px] !h-[154px]"></div>
            <Side key={side} name={side} cells={rubikArray[side]} />
          </div>
        ) : (
          <></>
        );
      })}
    </div>
  );
};

export default Cube;
