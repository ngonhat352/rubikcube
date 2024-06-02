// export type RubiksCube =
//     [
//         [].fill('A')
//         Array(9).fill('B'),
//         Array(9).fill('W'),
//         Array(9).fill('R'),
//         Array(9).fill('Y'),
//         Array(9).fill('G'),
//     ]

export type RubikArray = {
  U: string[]; // a side
  L: string[]; // a side has 9 cells
  F: string[];
  R: string[];
  B: string[];
  D: string[];
};

export type Side = "U" | "L" | "F" | "R" | "B" | "D";
