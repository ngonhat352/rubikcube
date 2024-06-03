export type RubikArray = {
  U: string[]; // a side
  L: string[]; // a side has 9 cells
  F: string[];
  R: string[];
  B: string[];
  D: string[];
};

export type Side = "U" | "L" | "F" | "R" | "B" | "D";
