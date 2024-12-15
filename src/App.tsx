import { useState } from "react";
import { Coordinate } from "./types";
import DataDisplay from "./components/DataDisplay";
import Controls from "./components/Controls";

function App() {
  const [coordinate, setCoordinate] = useState<Coordinate>({ x: "", y: "" });
  const [color, setColor] = useState<string>();
  const [date, setDate] = useState<Date>();

  return (
    <div
      className={"flex w-screen h-screen justify-center items-center gap-20"}
    >
      <Controls coordinate={coordinate} color={color} setCoordinate={setCoordinate} setColor={setColor} setDate={setDate} />
      <DataDisplay coordinate={coordinate} color={color} date={date} />
    </div>
  );
}

export default App;
