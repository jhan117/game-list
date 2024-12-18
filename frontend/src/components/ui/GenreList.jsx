import GenreItem from "./GenreItem";

import classes from "./GenreList.module.css";

const GenreList = () => {
  const genreList = ["All", "FPS", "Adventure", "Survival", "Simulation"];

  return (
    <ul className={classes.genreCon}>
      {genreList.map((g, idx) => (
        <GenreItem key={idx} data={g} />
      ))}
    </ul>
  );
};

export default GenreList;
