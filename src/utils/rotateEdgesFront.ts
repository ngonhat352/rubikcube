import { RubikArray } from "../types/RubikArray";

/*
 *          ->              Third row of up
 *                                                      V
 * Third column of left                            First column of right
 *            ^            First row of down          <-
 */
export const rotateEdgesFront = (rubikArray: RubikArray) => {
  let newRubikArray = { ...rubikArray };

  let temp1 = newRubikArray["D"][0];
  let temp2 = newRubikArray["D"][1];
  let temp3 = newRubikArray["D"][2];

  newRubikArray["D"][0] = newRubikArray["R"][6];
  newRubikArray["D"][1] = newRubikArray["R"][3];
  newRubikArray["D"][2] = newRubikArray["R"][0];

  newRubikArray["R"][6] = newRubikArray["U"][8];
  newRubikArray["R"][3] = newRubikArray["U"][7];
  newRubikArray["R"][0] = newRubikArray["U"][6];

  newRubikArray["U"][8] = newRubikArray["L"][2];
  newRubikArray["U"][7] = newRubikArray["L"][5];
  newRubikArray["U"][6] = newRubikArray["L"][8];

  newRubikArray["L"][2] = temp1;
  newRubikArray["L"][5] = temp2;
  newRubikArray["L"][8] = temp3;

  return newRubikArray;
};
