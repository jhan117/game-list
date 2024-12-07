import GenreItem from "./GenreItem";
import { genreList } from "../../utils/gameData";

import classes from "./Genre.module.css";

const Genre = () => {
  return (
    <ul className={classes.genreCon}>
      {genreList.map((g, idx) => (
        <GenreItem key={idx} data={g} />
      ))}
    </ul>
  );
};

export default Genre;
