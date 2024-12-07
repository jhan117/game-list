import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>웹서버프로그래밍 과제</p>
      <p>
        © Copyright 2024 <a href="https://github.com/jhan117/game-list">Kaye</a>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
