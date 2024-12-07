import React, { useState, useEffect } from "react";
import getGifData from "../../utils/getGifData";

import classes from "./Card.module.css";

const fetchGif = async (postId) => {
  if (!postId) return null;

  try {
    const apiKey = process.env.REACT_APP_TENOR_API_KEY;
    const response = await fetch(
      `https://tenor.googleapis.com/v2/posts?ids=${postId}&key=${apiKey}`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      return data.results[0].media_formats.gif.url;
    }
  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
  return null;
};

const Card = ({ data }) => {
  const { name, developer, genre, releaseDate, website } = data;
  const [gifUrl, setGifUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(false);

  const gifData = getGifData(name.toLowerCase());

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const gif = await fetchGif(gifData.postId);
      setGifUrl(gif);
      setLoading(false);
    };

    fetchData();
  }, [name, gifData.postId]);

  return (
    <div className={classes.card}>
      <div className={classes.gifContainer}>
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {loading ? (
            <p>Loading GIF...</p>
          ) : gifUrl ? (
            <img
              src={hovered ? gifData.hoverImgUrl : gifUrl}
              alt={gifData.altText}
              style={{ width: "100%", aspectRatio: gifData.aspectRatio }}
            />
          ) : (
            <p>No GIF available for this game.</p>
          )}
          <p className={classes.gameName}>{name}</p>
        </a>
      </div>
      <ul className={classes.content}>
        <li>개발: {developer}</li>
        <li>
          장르:{" "}
          {genre.map((g, idx) => (
            <span key={idx}>
              {g}
              {idx !== genre.length - 1 && ", "}
            </span>
          ))}
        </li>
        <li>출시일: {releaseDate}</li>
      </ul>
    </div>
  );
};

export default Card;
