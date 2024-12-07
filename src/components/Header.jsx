import { IoGameControllerOutline } from "react-icons/io5";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <IoGameControllerOutline size="5rem" />
      </div>
      <div className={classes.content}>
        <p>제가 가장 즐겨한 게임들입니다</p>
        <p>이미지를 클릭하면 게임 사이트로 이동합니다</p>
      </div>
    </header>
  );
};

export default Header;
