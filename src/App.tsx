import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import CoordinateInput from "@/components/CoordinateInput";
import { DateTimePicker } from "./components/DateTimePicker";
import { format } from "date-fns";

function App() {
  const [coordinate, setCoordinate] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [color, setColor] = useState<string>();
  const [date, setDate] = useState<Date>()

  return (
    <div className={"flex w-screen h-screen justify-center items-center gap-20"}>
      <div className={""}>
        <div className={"flex gap-2"}>
          <p className="font-bold">Coordinates:</p>
          <p>
            {coordinate.x}, {coordinate.y}
          </p>
        </div>
        <div className={"flex gap-2"}>
          <p className="font-bold">Color:</p>
          <p>{color ? <span className={`bg-[${color}]`}>{color.toUpperCase()}</span> : <span className="underline">Select a color</span>}</p> 
        </div>
        <div className={"flex gap-2"}>
          <p className="font-bold">Date time:</p>
          <p>
            {date ? format(date, 'yyyy-MM-dd HH:mm:ss') : <span className="underline">Select a date</span>} 
          </p>
        </div>
      </div>
      <div className={"flex flex-col gap-4"}>
        <CoordinateInput onChange={setCoordinate} />
        <HexColorPicker color={color} onChange={setColor} />
        <DateTimePicker onChange={setDate}/>
      </div>
    </div>
  );
}

export default App;
