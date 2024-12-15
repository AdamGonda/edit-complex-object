import React from "react";
import { Input } from "./ui/input";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setCoordinate } from "../features/coordinate/coordinateSlice";

function CoordinateInput() {
  const state = useAppSelector((state) => state.coordinate.value);
  const dispatch = useAppDispatch();

  function updateCoordinate(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.target.id;
    const newValue = e.target.value;

    dispatch(setCoordinate({ key, newValue }));
  }

  return (
    <div className="flex gap-2 w-[200px]">
      <label className="text-sm">
        X coordinate
        <Input
          id="x"
          type="number"
          value={state.x}
          onChange={updateCoordinate}
        />
      </label>
      <label className="text-sm">
        Y coordinate
        <Input
          id="y"
          type="number"
          value={state.y}
          onChange={updateCoordinate}
        />
      </label>
    </div>
  );
}

export default CoordinateInput;
