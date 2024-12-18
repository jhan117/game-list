import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/ui/Card";

import classes from "./MainPage.module.css";

const MainPage = () => {
  const [filteredGames, setFilteredGames] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const getGames = async (genre) => {
    const apiURL =
      process.env.REACT_APP_GAME_API_URL +
      (genre === "all" ? "" : `/genre/${genre}`);

    try {
      const response = await fetch(apiURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setFilteredGames(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
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
        {filteredGames &&
          filteredGames.map((v, idx) => (
            <Card key={idx} data={v} isFirst={idx === 0} />
          ))}
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
