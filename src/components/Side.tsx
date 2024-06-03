export default function Side({ cells }: { cells: string[] }) {
  return (
    <div className="side">
      {cells.map((cell, index) => (
        <div
          key={index}
          style={{
            backgroundColor: mapNameToColor(
              cell[0] as "W" | "O" | "G" | "R" | "B" | "Y"
            ),
            color: "black",
            borderTopLeftRadius: index == 0 ? "10px" : "",
            borderBottomLeftRadius: index == 6 ? "10px" : "",
            borderTopRightRadius: index == 2 ? "10px" : "",
            borderBottomRightRadius: index == 8 ? "10px" : "",
          }}
        ></div>
      ))}
    </div>
  );
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
