import { RubikArray, Side } from "../types/RubikArray";

export const rotateFaceClockwise = (
  face: Side,
  rubikArray: RubikArray
): RubikArray => {
  let newRubikArray = { ...rubikArray };

  // ROTATE CROSS
  var tempCross = newRubikArray[face][1];
  newRubikArray[face][1] = newRubikArray[face][3];
  newRubikArray[face][3] = newRubikArray[face][7];
  newRubikArray[face][7] = newRubikArray[face][5];
  newRubikArray[face][5] = tempCross;

  // ROTATE DIAGONALS
  var tempDiagonal = newRubikArray[face][0];
  newRubikArray[face][0] = newRubikArray[face][6];
  newRubikArray[face][6] = newRubikArray[face][8];
  newRubikArray[face][8] = newRubikArray[face][2];
  newRubikArray[face][2] = tempDiagonal;

  return newRubikArray;
};
