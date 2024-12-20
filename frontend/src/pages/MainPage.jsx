import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/ui/Card";
import CardSekleton from "../components/skeleton/CardSkeleton";

import classes from "./MainPage.module.css";

const MainPage = () => {
  const [filteredGames, setFilteredGames] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const getGames = async (genre) => {
    const apiURL =
      process.env.REACT_APP_GAME_API_URL +
      (genre === "all" ? "" : `/genre/${genre}`);

    setLoading(true);

    try {
      const response = await fetch(apiURL);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setFilteredGames(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const genre = searchParams.get("genre");

    if (!genre) {
      setSearchParams({ genre: "all" });
      return;
    }

    getGames(searchParams.get("genre"));
  }, [searchParams, setSearchParams]);

  return (
    <>
      <Header />
      <main className={classes.main}>
        {loading
          ? [...Array(3)].map((_, idx) => <CardSekleton key={idx} />)
          : filteredGames &&
            filteredGames.map((v, idx) => (
              <Card key={idx} data={v} isFirst={idx === 0} />
            ))}
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
