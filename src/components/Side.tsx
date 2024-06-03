import React from "react";

interface SideProps {
  cells: string[];
}

const mapNameToColor = (startingLetter: "W" | "O" | "G" | "R" | "B" | "Y") => {
  switch (startingLetter) {
    case "W":
      return "white";
    case "O":
      return "orange";
    case "G":
      return "green";
    case "R":
      return "red";
    case "B":
      return "blue";
    case "Y":
      return "yellow";
  }
};
const Side: React.FC<SideProps> = ({ cells }) => {
  return (
    <div className="side !rounded-[15px]">
      {cells.map((cell, index) => (
        <div
          key={index}
          style={{
            backgroundColor: mapNameToColor(
              cell[0] as "W" | "O" | "G" | "R" | "B" | "Y"
            ),
            color: "black",
          }}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Side;
