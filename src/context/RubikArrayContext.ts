import { createContext, useContext } from "react";
import { initialCleanRubik } from "../constants/initialRubik";
import { RubikArray } from "../types/RubikArray";

export type RubikArrayContextType = {
  // rubik array to display and change for the flat view
  rubikArray: RubikArray;
  setRubikArray: React.Dispatch<React.SetStateAction<RubikArray>>;

  // command for the 3d view
  command3d: string;
  setCommand3d: React.Dispatch<React.SetStateAction<string>>;
};

export const RubikArrayContext = createContext<RubikArrayContextType>({
  rubikArray: initialCleanRubik,
  setRubikArray: () => {},
  command3d: "",
  setCommand3d: () => {},
});

export const useRubikContext = () => useContext(RubikArrayContext);
