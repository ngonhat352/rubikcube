import { RubikArray } from "../types/RubikArray";

/*
 *                        First row of up                 <-
 *       V
 * First column of left                            Third column of right
 *            ->            Third row of down          ^
 */
export const rotateEdgesBack = (rubikArray: RubikArray) => {
  let newRubikArray = { ...rubikArray };

  let temp1 = newRubikArray["U"][0];
  let temp2 = newRubikArray["U"][1];
  let temp3 = newRubikArray["U"][2];

  newRubikArray["U"][0] = newRubikArray["R"][2];
  newRubikArray["U"][1] = newRubikArray["R"][5];
  newRubikArray["U"][2] = newRubikArray["R"][8];

  newRubikArray["R"][2] = newRubikArray["D"][8];
  newRubikArray["R"][5] = newRubikArray["D"][7];
  newRubikArray["R"][8] = newRubikArray["D"][6];

  newRubikArray["D"][6] = newRubikArray["L"][0];
  newRubikArray["D"][7] = newRubikArray["L"][3];
  newRubikArray["D"][8] = newRubikArray["L"][6];

  newRubikArray["L"][0] = temp3;
  newRubikArray["L"][3] = temp2;
  newRubikArray["L"][6] = temp1;

  return newRubikArray;
};
