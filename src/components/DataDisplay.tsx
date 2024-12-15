import { useAppSelector } from "@/store/hooks";
import { format } from "date-fns";

interface DataDisplayProps {
  color: string | undefined;
  date: Date | undefined;
}

export default function DataDisplay({ color, date }: DataDisplayProps) {
  const coordinate = useAppSelector((state) => state.coordinate.value);

  return (
    <div
      className="flex flex-col gap-3 p-6 rounded-md border-[10px]"
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
  );
}
