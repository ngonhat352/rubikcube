import { createContext, useContext } from "react";
import { initialCleanRubik } from "../constants/initialRubik";
import { RubikArray } from "../types/RubikArray";

export type RubikArrayContextType = {
  rubikArray: RubikArray;
  setRubikArray: React.Dispatch<React.SetStateAction<RubikArray>>;
};

export const RubikArrayContext = createContext<RubikArrayContextType>({
  rubikArray: initialCleanRubik,
  setRubikArray: () => {},
});

export const useRubikContext = () => useContext(RubikArrayContext);
