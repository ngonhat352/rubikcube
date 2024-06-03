import { RubikArray } from "../types/RubikArray";

/*
 *                First column of up              <------
 *                        V                             |
 *                First column of front                 |
 *                        V                             |
 *                First column of down         third column of back
 *                         -----------------------------^
 */
export const rotateEdgesLeft = (rubikArray: RubikArray) => {
  let newRubikArray = { ...rubikArray };

  let temp1 = newRubikArray["D"][0];
  let temp2 = newRubikArray["D"][3];
  let temp3 = newRubikArray["D"][6];

  newRubikArray["D"][0] = newRubikArray["F"][0];
  newRubikArray["D"][3] = newRubikArray["F"][3];
  newRubikArray["D"][6] = newRubikArray["F"][6];

  newRubikArray["F"][0] = newRubikArray["U"][0];
  newRubikArray["F"][3] = newRubikArray["U"][3];
  newRubikArray["F"][6] = newRubikArray["U"][6];

  newRubikArray["U"][0] = newRubikArray["B"][8];
  newRubikArray["U"][3] = newRubikArray["B"][5];
  newRubikArray["U"][6] = newRubikArray["B"][2];

  newRubikArray["B"][8] = temp1;
  newRubikArray["B"][5] = temp2;
  newRubikArray["B"][2] = temp3;

  return newRubikArray;
};
