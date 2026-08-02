import { useState } from "react";

import Content from "./Content";

import classes from "./Card.module.css";

const Card = ({ data, isFirst }) => {
  const [hovered, setHovered] = useState(false);
  const gifData = data.gifData;

  const capitalize = (str) => {
    return str
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");
  };

  return (
    <div className={classes.card}>
      {isFirst && (
        <img
          className={classes.secretImg}
          alt="my cute baby"
          src="https://github.com/user-attachments/assets/2068d8ef-35c8-475c-83d2-4fec39e23aa1"
        />
      )}
      <div className={classes.gifContainer}>
        {gifData?.gifUrl ? (
          <a
            href={data.website}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src={hovered ? gifData.hoverImgUrl : gifData.gifUrl}
              alt={gifData.altText}
              className={classes.gif}
            />
            <p className={classes.gameName}>{capitalize(data.name)}</p>
          </a>
        ) : (
          <p>Gif 없음</p>
        )}
      </div>
      <Content data={data} />
    </div>
  );
};

export default Card;
