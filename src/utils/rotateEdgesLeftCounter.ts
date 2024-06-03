import { RubikArray } from "../types/RubikArray";

/*
 *                First column of up              ------
 *                        ^                             |
 *                First column of front                 |
 *                        ^                             V
 *                First column of down         third column of back
 *                         ^-----------------------------
 */
export const rotateEdgesLeftCounter = (rubikArray: RubikArray) => {
  let newRubikArray = { ...rubikArray };

  let temp1 = newRubikArray["D"][0];
  let temp2 = newRubikArray["D"][3];
  let temp3 = newRubikArray["D"][6];

  newRubikArray["D"][0] = newRubikArray["B"][8];
  newRubikArray["D"][3] = newRubikArray["B"][5];
  newRubikArray["D"][6] = newRubikArray["B"][2];

  newRubikArray["B"][8] = newRubikArray["U"][0];
  newRubikArray["B"][5] = newRubikArray["U"][3];
  newRubikArray["B"][2] = newRubikArray["U"][6];

  newRubikArray["U"][0] = newRubikArray["F"][0];
  newRubikArray["U"][3] = newRubikArray["F"][3];
  newRubikArray["U"][6] = newRubikArray["F"][6];

  newRubikArray["F"][0] = temp1;
  newRubikArray["F"][3] = temp2;
  newRubikArray["F"][6] = temp3;

  return newRubikArray;
};
