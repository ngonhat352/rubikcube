import { useState } from "react";
import "./App.css";
import Cube from "./components/Cube";
import { RubikArray } from "./types/RubikArray";
import { rotate } from "./utils/rotate";

function App() {
  const [rubikArray, setRubikArray] = useState({
    U: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9"],
    L: ["O1", "O2", "O3", "O4", "O5", "O6", "O7", "O8", "O9"],
    F: ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9"],
    R: ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9"],
    B: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9"],
    D: ["Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7", "Y8", "Y9"],
  } as RubikArray);

  return (
    <div className="w-full flex flex-col items-center">
      <Cube rubikArray={rubikArray} />
      <div className="!mt-[40px] flex flex-row gap-2">
        <div className="flex flex-col gap-2">
          <button onClick={() => rotate("F", rubikArray, setRubikArray)}>
            F
          </button>
          <button onClick={() => rotate("Fc", rubikArray, setRubikArray)}>
            Fc
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <button onClick={() => rotate("R", rubikArray, setRubikArray)}>
            R
          </button>
          <button onClick={() => rotate("Rc", rubikArray, setRubikArray)}>
            Rc
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <button onClick={() => rotate("U", rubikArray, setRubikArray)}>
            U
          </button>
          <button onClick={() => rotate("Uc", rubikArray, setRubikArray)}>
            Uc
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <button onClick={() => rotate("B", rubikArray, setRubikArray)}>
            B
          </button>
          <button onClick={() => rotate("Bc", rubikArray, setRubikArray)}>
            Bc
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <button onClick={() => rotate("L", rubikArray, setRubikArray)}>
            L
          </button>
          <button onClick={() => rotate("Lc", rubikArray, setRubikArray)}>
            Lc
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <button onClick={() => rotate("D", rubikArray, setRubikArray)}>
            D
          </button>
          <button onClick={() => rotate("Dc", rubikArray, setRubikArray)}>
            Dc
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
