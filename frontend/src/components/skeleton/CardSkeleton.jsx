import Skeleton from "react-loading-skeleton";

import classes from "../ui/Card.module.css";
import useSkeletonColors from "../../hooks/useSkeletonColors";

const CardSekleton = () => {
  const { baseColor, highlightColor } = useSkeletonColors();

  return (
    <div className={classes.card}>
      <Skeleton
        className={classes.gifContainer}
        baseColor={baseColor}
        highlightColor={highlightColor}
      />
      <ul>
        <Skeleton
          width={"30%"}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          width={"40%"}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          width={"40%"}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          width={"40%"}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <Skeleton
          width={"80%"}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </ul>
    </div>
  );
};

export default CardSekleton;
