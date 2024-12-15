import { useState } from "react";
import DataDisplay from "./components/DataDisplay";
import Controls from "./components/Controls";

function App() {
  const [color, setColor] = useState<string>();
  const [date, setDate] = useState<Date>();

  return (
    <div
      className={"flex w-screen h-screen justify-center items-center gap-20"}
    >
      <Controls color={color} setColor={setColor} setDate={setDate} />
      <DataDisplay color={color} date={date} />
    </div>
  );
}

export default App;
