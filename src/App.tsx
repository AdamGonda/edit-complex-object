import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import CoordinateInput from "@/components/CoordinateInput";
import { DateTimePicker } from "./components/DateTimePicker";
import { format } from "date-fns";

function App() {
  const [coordinate, setCoordinate] = useState<{
    x: string;
    y: string;
  }>({ x: "", y: "" });
  const [color, setColor] = useState<string>();
  const [date, setDate] = useState<Date>();

  return (
    <div
      className={"flex w-screen h-screen justify-center items-center gap-20"}
    >
      <div className={"flex flex-col gap-4"}>
        <CoordinateInput
          coordinate={coordinate}
          setCoordinate={setCoordinate}
        />
        <HexColorPicker color={color} onChange={setColor} />
        <DateTimePicker onChange={setDate} />
      </div>
      <div
        className="flex flex-col w-[250px] gap-3 p-6 rounded-md border-[10px]"
        style={{ borderColor: color }}
      >
        <p>
          {!coordinate.x && !coordinate.y ? (
            <span className="underline">Select coordinates</span>
          ) : (
            <span>
              <b>x:</b> {coordinate.x} <b>y:</b> {coordinate.y}
            </span>
          )}
        </p>
        <p>
          {color ? (
            <span>{color.toUpperCase()}</span>
          ) : (
            <span className="underline">Select a color</span>
          )}
        </p>
        <p>
          {date ? (
            <span>{format(date, "yyyy-MM-dd HH:mm:ss")}</span>
          ) : (
            <span className="underline">Select a date</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default App;
