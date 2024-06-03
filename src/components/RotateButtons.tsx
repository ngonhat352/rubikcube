import { useRubikContext } from "../context/RubikArrayContext";
import { rotate } from "../utils/rotate";

export default function RotateButtonss({ setCommand }) {
  const { rubikArray, setRubikArray } = useRubikContext();

  return (
    <div className="!mt-[40px] flex flex-row gap-2">
      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            rotate("F", rubikArray, setRubikArray);
            setCommand("F");
          }}
        >
          F
        </button>
        <button
          onClick={() => {
            rotate("Fc", rubikArray, setRubikArray);
            setCommand("Fc");
          }}
        >
          Fc
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            rotate("R", rubikArray, setRubikArray);
            setCommand("R");
          }}
        >
          R
        </button>
        <button
          onClick={() => {
            rotate("Rc", rubikArray, setRubikArray);
            setCommand("Rc");
          }}
        >
          Rc
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            rotate("U", rubikArray, setRubikArray);
            setCommand("U");
          }}
        >
          U
        </button>
        <button
          onClick={() => {
            rotate("Uc", rubikArray, setRubikArray);
            setCommand("Uc");
          }}
        >
          Uc
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            rotate("B", rubikArray, setRubikArray);
            setCommand("B");
          }}
        >
          B
        </button>
        <button
          onClick={() => {
            rotate("Bc", rubikArray, setRubikArray);
            setCommand("Bc");
          }}
        >
          Bc
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            rotate("L", rubikArray, setRubikArray);
            setCommand("L");
          }}
        >
          L
        </button>
        <button
          onClick={() => {
            rotate("Lc", rubikArray, setRubikArray);
            setCommand("Lc");
          }}
        >
          Lc
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            rotate("D", rubikArray, setRubikArray);
            setCommand("D");
          }}
        >
          D
        </button>
        <button
          onClick={() => {
            rotate("Dc", rubikArray, setRubikArray);
            setCommand("Dc");
          }}
        >
          Dc
        </button>
      </div>
    </div>
  );
}
