import { useContext, useState, useEffect } from "react";
import ModeContext from "../store/ModeContext";

const useSkeletonColors = () => {
  const { isDarkMode } = useContext(ModeContext);
  const [baseColor, setBaseColor] = useState();
  const [highlightColor, setHighlightColor] = useState();

  useEffect(() => {
    if (isDarkMode) {
      setBaseColor("#333");
      setHighlightColor("#444");
    } else {
      setBaseColor("#ccc");
      setHighlightColor("#bbb");
    }
  }, [isDarkMode]);

  return { baseColor, highlightColor };
};

export default useSkeletonColors;
