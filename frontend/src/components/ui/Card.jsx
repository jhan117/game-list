import { useState, useEffect } from "react";

import Content from "./Content";
import Skeleton from "react-loading-skeleton";
import useSkeletonColors from "../../hooks/useSkeletonColors";

import classes from "./Card.module.css";

const Card = ({ data, isFirst }) => {
  const [gifUrl, setGifUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(false);
  const { baseColor, highlightColor } = useSkeletonColors();

  const gifData = data.gifData;

  const capitalize = (str) => {
    return str
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");
  };

  const fetchGif = async (postId) => {
    if (!postId) return null;

    setLoading(true);
    try {
      const apiKey = process.env.REACT_APP_TENOR_API_KEY;
      const response = await fetch(
        `https://tenor.googleapis.com/v2/posts?ids=${postId}&key=${apiKey}`
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const gif = data.results[0].media_formats.gif.url;

        setGifUrl(gif);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching GIF:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGif(gifData.postId);
  }, [gifData.postId]);

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
        {loading ? (
          <div style={{ width: "100%" }}>
            <Skeleton
              className={classes.gif}
              baseColor={baseColor}
              highlightColor={highlightColor}
            />
          </div>
        ) : gifUrl ? (
          <a
            href={data.website}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src={hovered ? gifData.hoverImgUrl : gifUrl}
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
