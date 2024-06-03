import { RubikArray, Side } from "../types/RubikArray";

/*
  Face: 
    O X O
    X _ X
    O X O
  => Rotate the 4 corners clockwise (the Os)
  => Rotate the 4 middle cells clockwise (the Xs)
 */
export const rotateFaceClockwise = (
  face: Side,
  rubikArray: RubikArray
): RubikArray => {
  let newRubikArray = { ...rubikArray };

  // Rotate the 4 middle cells
  var tempCross = newRubikArray[face][1];
  newRubikArray[face][1] = newRubikArray[face][3];
  newRubikArray[face][3] = newRubikArray[face][7];
  newRubikArray[face][7] = newRubikArray[face][5];
  newRubikArray[face][5] = tempCross;

  // Rotate the 4 corners
  var tempDiagonal = newRubikArray[face][0];
  newRubikArray[face][0] = newRubikArray[face][6];
  newRubikArray[face][6] = newRubikArray[face][8];
  newRubikArray[face][8] = newRubikArray[face][2];
  newRubikArray[face][2] = tempDiagonal;

  return newRubikArray;
};
