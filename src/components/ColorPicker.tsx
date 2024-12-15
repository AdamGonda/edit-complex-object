import { setColor } from "@/features/colorSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { HexColorPicker } from "react-colorful";

export default function ColorPicker() {
  const color = useAppSelector((state) => state.colorSlice.value);
  const dispatch = useAppDispatch();

  return <HexColorPicker color={color} onChange={(newColor) => dispatch(setColor({ newValue: newColor }))} />;
}
