import { useSearchParams } from "react-router-dom";

import classes from "./GenreItem.module.css";

const GenreItem = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get("genre");
  const genre = props.data;

  const changeGenreHandler = () => {
    searchParams.set("genre", genre.toLowerCase());
    setSearchParams(searchParams);
  };

  return (
    <li
      className={`${classes.genreItem} ${
        filter === genre.toLowerCase() && classes.onBtn
      }`}
      onClick={changeGenreHandler}
    >
      {genre}
    </li>
  );
};

export default GenreItem;
