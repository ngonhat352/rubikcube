import { RubikArray } from "../types/RubikArray";

/*
 *  <- First row of left <- First row of front <- First row of right <- First row of back <-
 */
export const rotateEdgesUp = (rubikArray: RubikArray) => {
  let newRubikArray = { ...rubikArray };

  let temp1 = newRubikArray["B"][2];
  let temp2 = newRubikArray["B"][1];
  let temp3 = newRubikArray["B"][0];

  newRubikArray["B"][2] = newRubikArray["L"][2];
  newRubikArray["B"][1] = newRubikArray["L"][1];
  newRubikArray["B"][0] = newRubikArray["L"][0];

  newRubikArray["L"][2] = newRubikArray["F"][2];
  newRubikArray["L"][1] = newRubikArray["F"][1];
  newRubikArray["L"][0] = newRubikArray["F"][0];

  newRubikArray["F"][2] = newRubikArray["R"][2];
  newRubikArray["F"][1] = newRubikArray["R"][1];
  newRubikArray["F"][0] = newRubikArray["R"][0];

  newRubikArray["R"][2] = temp1;
  newRubikArray["R"][1] = temp2;
  newRubikArray["R"][0] = temp3;

  return newRubikArray;
};
