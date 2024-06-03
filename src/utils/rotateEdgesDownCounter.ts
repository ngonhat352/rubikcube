import { RubikArray } from "../types/RubikArray";

/*
 *  <- Third row of left <- Third row of front <- Third row of right <- third row of back <-
 */
export const rotateEdgesDownCounter = (rubikArray: RubikArray) => {
  let newRubikArray = { ...rubikArray };

  let temp1 = newRubikArray["B"][8];
  let temp2 = newRubikArray["B"][7];
  let temp3 = newRubikArray["B"][6];

  newRubikArray["B"][8] = newRubikArray["L"][8];
  newRubikArray["B"][7] = newRubikArray["L"][7];
  newRubikArray["B"][6] = newRubikArray["L"][6];

  newRubikArray["L"][8] = newRubikArray["F"][8];
  newRubikArray["L"][7] = newRubikArray["F"][7];
  newRubikArray["L"][6] = newRubikArray["F"][6];

  newRubikArray["F"][8] = newRubikArray["R"][8];
  newRubikArray["F"][7] = newRubikArray["R"][7];
  newRubikArray["F"][6] = newRubikArray["R"][6];

  newRubikArray["R"][8] = temp1;
  newRubikArray["R"][7] = temp2;
  newRubikArray["R"][6] = temp3;

  return newRubikArray;
};
