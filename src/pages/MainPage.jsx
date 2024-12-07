import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/ui/Card";
import { gamesData } from "../utils/gameData";

import classes from "./MainPage.module.css";

const MainPage = () => {
  const [filteredGames, setFilteredGames] = useState(gamesData);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const genre = searchParams.get("genre");

    if (genre === "all" || !genre) {
      setFilteredGames(gamesData);
    } else {
      setFilteredGames(
        gamesData.filter((game) => game.mGenre.toLowerCase() === genre)
      );
    }
  }, [searchParams]);

  return (
    <>
      <Header />
      <main className={classes.main}>
        {filteredGames.map((v, idx) => (
          <Card key={idx} data={v} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
