import GenreItem from "./GenreItem";

import { genreList } from "../../utils/gameData";

import classes from "./GenreList.module.css";

const GenreList = () => {
  return (
    <ul className={classes.genreCon}>
      {genreList.map((g, idx) => (
        <GenreItem key={idx} data={g} />
      ))}
    </ul>
  );
};

export default GenreList;
