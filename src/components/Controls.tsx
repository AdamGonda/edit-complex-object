import ColorPicker from "./ColorPicker";
import CoordinateInput from "./CoordinateInput";
import { DateTimePicker } from "./DateTimePicker";

export default function Controls() {
  return (
    <div className={"flex flex-col gap-4"}>
      <CoordinateInput />
      <ColorPicker />
      <DateTimePicker />
    </div>
  );
}
