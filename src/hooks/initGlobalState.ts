import { fetchColor } from "@/features/color/colorActions";
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";

export default function useInitGlobalState() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchColor())
  }, [])
}