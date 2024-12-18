import { useState, useEffect, useCallback } from "react";

import Content from "./Content";

import classes from "./Card.module.css";

const Card = ({ data, isFirst }) => {
  const [gifUrl, setGifUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [gifData, setGifData] = useState();

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

  const getGifData = useCallback(async (name) => {
    const apiURL = process.env.REACT_APP_GIF_API_URL + `/name/${name}`;

    try {
      const response = await fetch(apiURL);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setGifData(data);

      setLoading(true);
      const gif = await fetchGif(data.postId);
      setGifUrl(gif);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getGifData(data.name);
  }, [data.name, getGifData]);

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
          <p>GIF 로딩중...</p>
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
              style={{ width: "100%" }}
            />
            <p className={classes.gameName}>{data.name}</p>
          </a>
        ) : (
          <p>GIF 없음</p>
        )}
      </div>
      <Content data={data} />
    </div>
  );
};

export default Card;
