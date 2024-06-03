import { RubikArray } from "../types/RubikArray";

export const rotateEdgesRight = (rubikArray: RubikArray) => {
  let newRubikArray = { ...rubikArray };

  let temp1 = newRubikArray["D"][2];
  let temp2 = newRubikArray["D"][5];
  let temp3 = newRubikArray["D"][8];

  newRubikArray["D"][2] = newRubikArray["B"][6];
  newRubikArray["D"][5] = newRubikArray["B"][3];
  newRubikArray["D"][8] = newRubikArray["B"][0];

  newRubikArray["B"][6] = newRubikArray["U"][2];
  newRubikArray["B"][3] = newRubikArray["U"][5];
  newRubikArray["B"][0] = newRubikArray["U"][8];

  newRubikArray["U"][2] = newRubikArray["F"][2];
  newRubikArray["U"][5] = newRubikArray["F"][5];
  newRubikArray["U"][8] = newRubikArray["F"][8];

  newRubikArray["F"][2] = temp1;
  newRubikArray["F"][5] = temp2;
  newRubikArray["F"][8] = temp3;

  return newRubikArray;
};
