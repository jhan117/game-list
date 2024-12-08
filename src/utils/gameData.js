const gamesData = [
  {
    name: "Valorant",
    developer: "Riot Games",
    genre: ["FPS", "액션", "히어로 슈팅"],
    mGenre: "FPS",
    releaseDate: "2020-06-02",
    website: "https://playvalorant.com/ko-kr/",
    interestLevel: 5,
    reasonForInterest: "레식 접고 난 후 빠진 게임입니다.",
    gifData: {
      postId: "22053165",
      altText: "Valorant Jett",
      hoverImgUrl:
        "https://www.ilovepc.co.kr/news/photo/202007/35448_71133_311.jpg",
    },
  },
  {
    name: "Minecraft",
    developer: "Mojang Studios",
    genre: ["샌드박스", "서바이벌", "판타지"],
    mGenre: "Survival",
    releaseDate: "2011-11-18",
    website: "https://www.minecraft.net/ko-kr",
    interestLevel: 5,
    reasonForInterest: "공장 만드는 과정과 모드팩이 재밌습니다.",
    gifData: {
      postId: "26865440",
      hoverImgUrl:
        "https://wallpapers.com/images/featured/minecraft-background-cfljc4haleghnajo.jpg",
      altText: "Minecraft",
    },
  },
  {
    name: "Rainbow Six Siege",
    developer: "Ubisoft Montreal",
    genre: ["히어로 슈팅", "전술 FPS"],
    mGenre: "FPS",
    releaseDate: "2015-12-01",
    website: "https://www.ubisoft.com/ko-kr/game/rainbow-six/siege",
    interestLevel: 5,
    reasonForInterest: "감자 서버였지만 제일 오래했던 게임입니다.",
    gifData: {
      postId: "11093556",
      hoverImgUrl: "https://images8.alphacoders.com/700/thumb-1920-700498.jpg",
      altText: "R6S Vigil",
    },
  },
  {
    name: "Genshin Impact",
    developer: "HoYoverse",
    genre: ["오픈 월드", "액션 어드벤처", "RPG"],
    mGenre: "Adventure",
    releaseDate: "2020-09-28",
    website: "https://genshin.hoyoverse.com/ko",
    interestLevel: 4,
    reasonForInterest: "스토리가 마음에 들어서 즐겨했습니다.",
    gifData: {
      postId: "22446446",
      hoverImgUrl:
        "https://www.siliconera.com/wp-content/uploads/2022/03/yae.jpg",
      altText: "genshin raiden shogun",
    },
  },
  {
    name: "Animal Crossing",
    developer: "Nintendo",
    genre: ["커뮤니케이션"],
    mGenre: "Simulation",
    releaseDate: "2020-03-20",
    website: "https://www.nintendo.co.kr/switch/acbaa/index.html",
    interestLevel: 3,
    reasonForInterest: "빚 갚을 때까지는 즐겨했습니다.",
    gifData: {
      postId: "16548891",
      hoverImgUrl:
        "https://i.namu.wiki/i/oU0avPQmlPv0p13BPnuEqyzmtGl9SoTArdKVYpb1r5CYXrpUjEqtiurvlFDjpXdOMyDXwIFYpz0x3PgtS92_8A.webp",
      altText: "animal crossing",
    },
  },
  {
    name: "ASTRONEER",
    developer: "System Era Softworks",
    genre: ["SF", "생존"],
    mGenre: "Survival",
    releaseDate: "2019-02-06",
    website: "https://astroneer.space",
    interestLevel: 4,
    reasonForInterest: "최근에 시작한 게임인데 저사양이라 좋습니다.",
    gifData: {
      postId: "14299584",
      hoverImgUrl:
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/361420/header.jpg?t=1731607730",
      altText: "astroneer",
    },
  },
  {
    name: "It Takes Two",
    developer: "Hazelight Studios",
    genre: ["액션 어드벤처", "플랫포머", "코옵"],
    mGenre: "Adventure",
    releaseDate: "2021-03-26",
    website: "https://www.ea.com/ko-kr/games/it-takes-two",
    interestLevel: 4,
    reasonForInterest: "친구랑 너무 재밌게 했습니다.",
    gifData: {
      postId: "26880856",
      hoverImgUrl:
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg?t=1730911936",
      altText: "it takes two",
    },
  },
  {
    name: "Modern Warfare 2",
    developer: "Infinity Ward",
    genre: ["FPS"],
    mGenre: "FPS",
    releaseDate: "2022-10-28",
    website: "https://www.callofduty.com/ko/store/games/modernwarfare2",
    interestLevel: 3,
    reasonForInterest: "반동 잡기 쉬워서 가볍게 하기 좋습니다.",
    gifData: {
      postId: "26972507",
      hoverImgUrl:
        "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1962660/capsule_616x353_koreana.jpg?t=1710969334",
      altText: "modern warfare 2",
    },
  },
  {
    name: "Uma Musume",
    developer: "Cygames",
    genre: ["육성 시뮬레이션"],
    mGenre: "Simulation",
    releaseDate: "2022-06-20",
    website: "https://umamusume.kakaogames.com/",
    interestLevel: 5,
    reasonForInterest: "키우는 재미도 있고 스토리도 감동적입니다.",
    gifData: {
      postId: "26413579",
      hoverImgUrl:
        "https://external-preview.redd.it/nvyyBD5sbjMbplVsMmgtkLIih7_NRwAL3pwfoF4lpZI.jpg?width=1080&crop=smart&auto=webp&s=d4a129fe7176783c17bbdf2bf9c3016eb07b5090",
      altText: "uma musume",
    },
  },
];

const genreList = ["All", "FPS", "Adventure", "Survival", "Simulation"];

export { gamesData, genreList };
