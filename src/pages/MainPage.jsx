import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/ui/Card";

import classes from "./MainPage.module.css";
import gamesData from "../utils/gameData";

const MainPage = () => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        {gamesData.map((v, idx) => (
          <Card key={idx} data={v} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
