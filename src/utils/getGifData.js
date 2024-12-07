const getGifData = (game) => {
  switch (game) {
    case "valorant":
      return {
        postId: "22053165",
        altText: "Valorant Jett",
        hoverImgUrl:
          "https://www.ilovepc.co.kr/news/photo/202007/35448_71133_311.jpg",
      };
    case "minecraft":
      return {
        postId: "26865440",
        hoverImgUrl:
          "https://wallpapers.com/images/featured/minecraft-background-cfljc4haleghnajo.jpg",
        altText: "Minecraft",
      };
    case "rainbow six siege":
      return {
        postId: "11093556",
        hoverImgUrl:
          "https://images8.alphacoders.com/700/thumb-1920-700498.jpg",
        altText: "R6S Vigil",
      };
    default:
      return {};
  }
};

export default getGifData;
