import { useRubikContext } from "../context/RubikArrayContext";
import Side from "./Side";

export default function Cube() {
  const { rubikArray } = useRubikContext();

  return (
    <div id="cube" className="flex flex-col !gap-[2px] mt-[20px]">
      {/* Up side */}
      {Object.keys(rubikArray).map(
        (side) =>
          side == "U" && (
            <div className="flex flex-row gap-[2px]" key={"upRegion"}>
              <div
                className="!w-[154px] !min-w-[154px] !h-[154px]"
                key="upBlank"
              ></div>
              <Side key={side} cells={rubikArray[side]} />
            </div>
          )
      )}

      {/* left - front - right - back sides */}
      <div className="flex flex-row gap-[2px]" key={"mid"}>
        {Object.keys(rubikArray).map(
          (side) =>
            (side == "F" || side == "R" || side == "B" || side == "L") && (
              <Side key={side} cells={rubikArray[side]} />
            )
        )}
      </div>

      {/* Down side */}
      {Object.keys(rubikArray).map(
        (side) =>
          side == "D" && (
            <div className="flex flex-row gap-[2px]" key={side}>
              <div className="!w-[154px] !min-w-[154px] !h-[154px]"></div>
              <Side key={side} cells={rubikArray[side]} />
            </div>
          )
      )}
    </div>
  );
}
