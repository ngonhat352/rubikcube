import { useState } from "react";

import "./App.css";
import { flat, rubikcube } from "./assets";
import Cube from "./components/Cube";
import Cube3D from "./components/Cube3d";
import RotateButtons from "./components/RotateButtons";
import { initialCleanRubik } from "./constants/initialRubik";
import { RubikArrayContext } from "./context/RubikArrayContext";

export default function App() {
  const [rubikArray, setRubikArray] = useState(initialCleanRubik);

  const tabs = [0, 1];
  const [selectedTab, setSelectedTab] = useState(tabs[1]);

  const [command, setCommand] = useState("");

  return (
    <div className="w-full flex flex-col items-center">
      {/* 2 Tabs - 3D cube or flat cube */}
      <div className="flex flex-row gap-2">
        <button onClick={() => setSelectedTab(tabs[0])}>
          <img
            src={rubikcube}
            className="!w-[30px] !h-[30px] !max-w-[30px] !max-h-[30px]"
          />
        </button>
        <button onClick={() => setSelectedTab(tabs[1])}>
          <img
            src={flat}
            className="!w-[30px] !h-[30px] !max-w-[30px] !max-h-[30px]"
          />
        </button>
      </div>

      {selectedTab == tabs[0] && (
        <Cube3D command={command} setCommand={setCommand} />
      )}
      <RubikArrayContext.Provider value={{ rubikArray, setRubikArray }}>
        {selectedTab == tabs[1] && <Cube />}
        <RotateButtons setCommand={setCommand} />
      </RubikArrayContext.Provider>
    </div>
  );
}
