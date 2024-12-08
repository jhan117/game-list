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
    case "genshin impact":
      return {
        postId: "22446446",
        hoverImgUrl:
          "https://www.siliconera.com/wp-content/uploads/2022/03/yae.jpg",
        altText: "genshin raiden shogun",
      };
    case "animal crossing":
      return {
        postId: "16548891",
        hoverImgUrl:
          "https://i.namu.wiki/i/oU0avPQmlPv0p13BPnuEqyzmtGl9SoTArdKVYpb1r5CYXrpUjEqtiurvlFDjpXdOMyDXwIFYpz0x3PgtS92_8A.webp",
        altText: "animal crossing",
      };
    case "astroneer":
      return {
        postId: "14299584",
        hoverImgUrl:
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/361420/header.jpg?t=1731607730",
        altText: "astroneer",
      };
    case "it takes two":
      return {
        postId: "26880856",
        hoverImgUrl:
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg?t=1730911936",
        altText: "it takes two",
      };
    case "modern warfare 2":
      return {
        postId: "26972507",
        hoverImgUrl:
          "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1962660/capsule_616x353_koreana.jpg?t=1710969334",
        altText: "modern warfare 2",
      };
    case "uma musume":
      return {
        postId: "26413579",
        hoverImgUrl:
          "https://external-preview.redd.it/nvyyBD5sbjMbplVsMmgtkLIih7_NRwAL3pwfoF4lpZI.jpg?width=1080&crop=smart&auto=webp&s=d4a129fe7176783c17bbdf2bf9c3016eb07b5090",
        altText: "uma musume",
      };
    default:
      return {};
  }
};

export default getGifData;
