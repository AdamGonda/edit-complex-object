import { useState } from "react";
import { Input } from "./ui/input";

interface CoordinateInputProps {
  onChange: (coordinate: { x: number; y: number }) => void;
}

export default function CoordinateInput({ onChange }: CoordinateInputProps) {
    const [coordinate, setCoordinate] = useState<{
      x: number;
      y: number;
    }>({ x: 0, y: 0 });
    
    function updateCoordinate(e: React.ChangeEvent<HTMLInputElement>) {
      const key = e.target.id
      const newValue = e.target.value;
  
      setCoordinate((prevState) => {
        const newCoordinate = {
          ...prevState,
          [key]: newValue,
        };

        onChange(newCoordinate);
        return newCoordinate
      });
    }

    return (
      <div className="flex gap-2 w-[200px]">
        <Input
            id="x"
            type="number"
            value={coordinate.x}
            onChange={updateCoordinate}
          />
          <Input
            id="y"
            type="number"
            value={coordinate.y}
            onChange={updateCoordinate}
          />
      </div>
    )
  }
