import { useContext } from "react";
import { IoGameControllerOutline } from "react-icons/io5";
import GenreList from "./ui/GenreList";

import classes from "./Header.module.css";
import ModeContext from "../store/ModeContext";

const Header = () => {
  const { isDarkMode, toggleMode } = useContext(ModeContext);

  return (
    <header className={classes.header}>
      <div className={`${classes.container} ${isDarkMode && classes.rotated}`}>
        <IoGameControllerOutline size="5rem" onClick={toggleMode} />
      </div>
      <div className={classes.content}>
        <p className={classes.info}>
          *상단 아이콘을 클릭하면 야간 모드로 전환됩니다.
        </p>
        <div>
          <p>제가 가장 즐겨한 게임들입니다.</p>
          <p>이미지를 클릭하면 게임 사이트로 이동합니다.</p>
        </div>
      </div>
      <GenreList />
    </header>
  );
};

export default Header;
