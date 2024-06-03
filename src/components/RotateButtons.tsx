import { useRubikContext } from "../context/RubikArrayContext";
import { rotate } from "../utils/rotate";

export default function RotateButtonss({ tab }: { tab: 0 | 1 }) {
  const { rubikArray, setRubikArray, setCommand3d } = useRubikContext();

  return (
    <div className="!mt-[40px] flex flex-row gap-2">
      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            tab == 1
              ? rotate("F", rubikArray, setRubikArray)
              : setCommand3d("F");
          }}
        >
          F
        </button>
        <button
          onClick={() => {
            tab == 1
              ? rotate("Fc", rubikArray, setRubikArray)
              : setCommand3d("Fc");
          }}
        >
          Fc
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            tab == 1
              ? rotate("R", rubikArray, setRubikArray)
              : setCommand3d("R");
          }}
        >
          R
        </button>
        <button
          onClick={() => {
            tab == 1
              ? rotate("Rc", rubikArray, setRubikArray)
              : setCommand3d("Rc");
          }}
        >
          Rc
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            tab == 1
              ? rotate("U", rubikArray, setRubikArray)
              : setCommand3d("U");
          }}
        >
          U
        </button>
        <button
          onClick={() => {
            tab == 1
              ? rotate("Uc", rubikArray, setRubikArray)
              : setCommand3d("Uc");
          }}
        >
          Uc
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            tab == 1
              ? rotate("B", rubikArray, setRubikArray)
              : setCommand3d("B");
          }}
        >
          B
        </button>
        <button
          onClick={() => {
            tab == 1
              ? rotate("Bc", rubikArray, setRubikArray)
              : setCommand3d("Bc");
          }}
        >
          Bc
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            tab == 1
              ? rotate("L", rubikArray, setRubikArray)
              : setCommand3d("L");
          }}
        >
          L
        </button>
        <button
          onClick={() => {
            tab == 1
              ? rotate("Lc", rubikArray, setRubikArray)
              : setCommand3d("Lc");
          }}
        >
          Lc
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            tab == 1
              ? rotate("D", rubikArray, setRubikArray)
              : setCommand3d("D");
          }}
        >
          D
        </button>
        <button
          onClick={() => {
            tab == 1
              ? rotate("Dc", rubikArray, setRubikArray)
              : setCommand3d("Dc");
          }}
        >
          Dc
        </button>
      </div>
    </div>
  );
}
