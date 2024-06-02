import { RubikArray, Side } from "../types/RubikArray";
import { rotateEdgesFront } from "./rotateEdgesFront";
import { rotateEdgesFrontCounter } from "./rotateEdgesFrontCounter";
import { rotateFaceClockwise } from "./rotateFaceClockwise";
import { rotateFaceCounterClockwise } from "./rotateFaceCounterClockwise";

export const rotate = (
  type: string,
  rubikArray: RubikArray,
  setRubikArray: React.Dispatch<React.SetStateAction<RubikArray>>
) => {
  let _rubikArray;
  switch (type) {
    case "F":
      _rubikArray = rotateEdgesFront(rubikArray);
      setRubikArray(rotateFaceClockwise(type[0] as Side, _rubikArray));
      return;

    case "Fc":
      _rubikArray = rotateEdgesFrontCounter(rubikArray);
      setRubikArray(rotateFaceCounterClockwise(type[0] as Side, _rubikArray));
      return;

    case "U":

    case "Ui":

    case "B":

    case "Bi":

    case "L":

    case "Li":

    case "R":

    case "Ri":

    case "D":

    case "Di":

    default:
      setRubikArray(rubikArray);
      return;
  }
};
