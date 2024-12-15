import { HexColorPicker } from "react-colorful";
import CoordinateInput from "./CoordinateInput";
import { DateTimePicker } from "./DateTimePicker";

interface ControlsProps {
  color: string | undefined;
  setColor: (color: string) => void;
  setDate: (date: Date) => void;
}

export default function Controls({
  color,
  setColor,
  setDate,
}: ControlsProps) {
  return (
    <div className={"flex flex-col gap-4"}>
      <CoordinateInput />
      <HexColorPicker color={color} onChange={setColor} />
      <DateTimePicker onChange={setDate} />
    </div>
  );
}
