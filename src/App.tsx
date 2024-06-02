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

  // const rotateFace = (
  //   face: string,
  //   direction: "clockwise" | "counterclockwise"
  // ) => {
  //   const newFaces = { ...faces };
  //   if (direction === "clockwise") {
  //     newFaces[face] = [
  //       newFaces[face][6],
  //       newFaces[face][3],
  //       newFaces[face][0],
  //       newFaces[face][7],
  //       newFaces[face][4],
  //       newFaces[face][1],
  //       newFaces[face][8],
  //       newFaces[face][5],
  //       newFaces[face][2],
  //     ];
  //   } else {
  //     newFaces[face] = [
  //       newFaces[face][2],
  //       newFaces[face][5],
  //       newFaces[face][8],
  //       newFaces[face][1],
  //       newFaces[face][4],
  //       newFaces[face][7],
  //       newFaces[face][0],
  //       newFaces[face][3],
  //       newFaces[face][6],
  //     ];
  //   }
  //   // TODO: updateAdjacentFaces(face, direction) to modify adjacent faces
  //   setFaces(newFaces);
  // };

  return (
    <div>
      <Cube rubikArray={rubikArray} />
      <div id="controls">
        <div className="rotation-controls">
          <button onClick={() => rotate("U", rubikArray, setRubikArray)}>
            Rotate U Clockwise
          </button>
          <button onClick={() => rotate("Uc", rubikArray, setRubikArray)}>
            Rotate U Counterclockwise
          </button>
        </div>
        <div className="rotation-controls">
          <button onClick={() => rotate("F", rubikArray, setRubikArray)}>
            Rotate F Clockwise
          </button>
          <button onClick={() => rotate("Fc", rubikArray, setRubikArray)}>
            Rotate F Counterclockwise
          </button>
        </div>
        {/* Add more buttons for other faces if needed */}
      </div>
    </div>
  );
}

export default App;
