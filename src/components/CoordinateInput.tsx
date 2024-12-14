import React, { memo } from "react";
import { Input } from "./ui/input";

interface CoordinateInputProps {
  coordinate: { x: string; y: string };
  setCoordinate: React.Dispatch<React.SetStateAction<{ x: string; y: string }>>;
}

function CoordinateInput({ coordinate, setCoordinate }: CoordinateInputProps) {
  function updateCoordinate(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.target.id;
    const newValue = e.target.value;

    setCoordinate((prevState) => {
      const newCoordinate = {
        ...prevState,
        [key]: newValue,
      };

      return newCoordinate;
    });
  }

  return (
    <div className="flex gap-2 w-[200px]">
      <label className="text-sm">
        X coordinate
        <Input
          id="x"
          type="number"
          value={coordinate.x}
          onChange={updateCoordinate}
        />
      </label>
      <label className="text-sm">
        Y coordinate
        <Input
          id="y"
          type="number"
          value={coordinate.y}
          onChange={updateCoordinate}
        />
      </label>
    </div>
  );
}

export default memo(CoordinateInput);
