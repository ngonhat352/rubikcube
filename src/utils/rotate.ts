import { RubikArray, Side } from "../types/RubikArray";
import { rotateEdgesBack } from "./rotateEdgesBack";
import { rotateEdgesBackCounter } from "./rotateEdgesBackCounter";
import { rotateEdgesDown } from "./rotateEdgesDown";
import { rotateEdgesDownCounter } from "./rotateEdgesDownCounter";
import { rotateEdgesFront } from "./rotateEdgesFront";
import { rotateEdgesFrontCounter } from "./rotateEdgesFrontCounter";
import { rotateEdgesLeft } from "./rotateEdgesLeft";
import { rotateEdgesLeftCounter } from "./rotateEdgesLeftCounter";
import { rotateEdgesRight } from "./rotateEdgesRight";
import { rotateEdgesRightCounter } from "./rotateEdgesRightCounter";
import { rotateEdgesUp } from "./rotateEdgesUp";
import { rotateEdgesUpCounter } from "./rotateEdgesUpCounter";
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
      _rubikArray = rotateEdgesUp(rubikArray);
      setRubikArray(rotateFaceClockwise(type[0] as Side, _rubikArray));
      return;

    case "Uc":
      _rubikArray = rotateEdgesUpCounter(rubikArray);
      setRubikArray(rotateFaceCounterClockwise(type[0] as Side, _rubikArray));
      return;

    case "B":
      _rubikArray = rotateEdgesBack(rubikArray);
      setRubikArray(rotateFaceClockwise(type[0] as Side, _rubikArray));
      return;

    case "Bc":
      _rubikArray = rotateEdgesBackCounter(rubikArray);
      setRubikArray(rotateFaceCounterClockwise(type[0] as Side, _rubikArray));
      return;

    case "L":
      _rubikArray = rotateEdgesLeft(rubikArray);
      setRubikArray(rotateFaceClockwise(type[0] as Side, _rubikArray));
      return;

    case "Lc":
      _rubikArray = rotateEdgesLeftCounter(rubikArray);
      setRubikArray(rotateFaceCounterClockwise(type[0] as Side, _rubikArray));
      return;

    case "R":
      _rubikArray = rotateEdgesRight(rubikArray);
      setRubikArray(rotateFaceClockwise(type[0] as Side, _rubikArray));
      return;

    case "Rc":
      _rubikArray = rotateEdgesRightCounter(rubikArray);
      setRubikArray(rotateFaceCounterClockwise(type[0] as Side, _rubikArray));
      return;

    case "D":
      _rubikArray = rotateEdgesDown(rubikArray);
      setRubikArray(rotateFaceClockwise(type[0] as Side, _rubikArray));
      return;

    case "Dc":
      _rubikArray = rotateEdgesDownCounter(rubikArray);
      setRubikArray(rotateFaceCounterClockwise(type[0] as Side, _rubikArray));
      return;

    default:
      setRubikArray(rubikArray);
      return;
  }
};
