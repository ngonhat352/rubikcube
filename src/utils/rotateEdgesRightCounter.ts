import { RubikArray } from "../types/RubikArray";

/*
 *                third column of up              <------
 *                        V                             |
 *                third column of front                 |
 *                        V                             |
 *                third column of down         first column of back
 *                         -----------------------------^
 */
export const rotateEdgesRightCounter = (rubikArray: RubikArray) => {
  let newRubikArray = { ...rubikArray };

  let temp1 = newRubikArray["D"][2];
  let temp2 = newRubikArray["D"][5];
  let temp3 = newRubikArray["D"][8];

  newRubikArray["D"][2] = newRubikArray["F"][2];
  newRubikArray["D"][5] = newRubikArray["F"][5];
  newRubikArray["D"][8] = newRubikArray["F"][8];

  newRubikArray["F"][2] = newRubikArray["U"][2];
  newRubikArray["F"][5] = newRubikArray["U"][5];
  newRubikArray["F"][8] = newRubikArray["U"][8];

  newRubikArray["U"][2] = newRubikArray["B"][6];
  newRubikArray["U"][5] = newRubikArray["B"][3];
  newRubikArray["U"][8] = newRubikArray["B"][0];

  newRubikArray["B"][6] = temp1;
  newRubikArray["B"][3] = temp2;
  newRubikArray["B"][0] = temp3;

  return newRubikArray;
};
