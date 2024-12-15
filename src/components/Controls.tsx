import { HexColorPicker } from "react-colorful";
import CoordinateInput from "./CoordinateInput";
import { DateTimePicker } from "./DateTimePicker";
import { Coordinate } from "@/types";
import { type Dispatch } from "react";

interface ControlsProps {
  coordinate: Coordinate;
  color: string | undefined;
  setCoordinate: Dispatch<React.SetStateAction<Coordinate>>;
  setColor: (color: string) => void;
  setDate: (date: Date) => void;
}

export default function Controls({ coordinate, color, setCoordinate, setColor, setDate }: ControlsProps) {
  return (
    <div className={"flex flex-col gap-4"}>
        <CoordinateInput
          coordinate={coordinate}
          setCoordinate={setCoordinate}
        />
        <HexColorPicker color={color} onChange={setColor} />
        <DateTimePicker onChange={setDate} />
      </div>
  );
}