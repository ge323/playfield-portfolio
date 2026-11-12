export type PortfolioItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  genre: string;
  platform: string[];
  year: string;
  image?: string;
  imageFit?: "cover" | "contain";
  accent: string;
  playUrl: string;
};

// Add one entry per real game or app. Web games open to play; apps open their store page.
export const projects: PortfolioItem[] = [
  {
    id: "elevator-nunchi-game",
    title: "엘베 눈치 게임",
    subtitle: "엘리베이터 속 눈치 한 판",
    description: "엘리베이터를 배경으로 한 하이퍼 캐주얼 눈치 게임.",
    genre: "하이퍼 캐주얼",
    platform: ["WEB"],
    year: "2026",
    image: "/images/elevator-nunchi-game.png",
    imageFit: "contain",
    accent: "#e3d288",
    playUrl: "https://ge323.github.io/elevator-nunchi-game/",
  },
  {
    id: "emotion-apothecary",
    title: "마음의 약국",
    subtitle: "마음을 돌보는 코지 시뮬레이션",
    description: "약국을 배경으로 한 코지 상담 시뮬레이션.",
    genre: "코지 상담 시뮬레이션",
    platform: ["WEB"],
    year: "2026",
    image: "/images/emotion-apothecary.png",
    imageFit: "contain",
    accent: "#b68bcc",
    playUrl: "https://ge323.github.io/emotion-apothecary/",
  },
  {
    id: "eolma",
    title: "얼마",
    subtitle: "똑똑한 소비 습관의 시작",
    description: "내 생활비에 맞춰 알려주는 하루 소비 가이드.",
    genre: "금융",
    platform: ["APP"],
    year: "2026",
    image: "/images/eolma.png",
    imageFit: "contain",
    accent: "#6ea4f5",
    playUrl: "https://play.google.com/store/apps/details?id=com.eolma.app&hl=ko",
  },
  {
    id: "gamja-office",
    title: "감자 오피스",
    subtitle: "감자 사무실에서 함께하는 한 판",
    description: "온라인에서 함께 즐기는 파티 게임.",
    genre: "파티 게임",
    platform: ["WEB"],
    year: "2026",
    image: "/images/gamja-office.png",
    imageFit: "contain",
    accent: "#9db78b",
    playUrl: "https://gamja-office-pwa.onrender.com",
  },
  {
    id: "sea-turtle-soup-chat",
    title: "바다거북스프(&채팅방)",
    subtitle: "대화 속에 숨은 진실",
    description: "AI와 대화하며 추리를 이어가는 채팅 게임.",
    genre: "AI 추리 채팅 게임",
    platform: ["WEB"],
    year: "2026",
    accent: "#63cbb7",
    playUrl: "https://dittzit-chat-o546.vercel.app/",
  },
];

// Replace the example contact and skill details with your own information.
export const profile = {
  name: "YOUR NAME",
  email: "hello@yourdomain.dev",
  skills: ["GAMEPLAY SYSTEMS", "LEVEL DESIGN", "PROTOTYPING", "UI & GAME FEEL"],
  stack: ["Unity", "Godot", "C#", "TypeScript"],
  links: [
    { label: "GitHub", url: "" },
    { label: "itch.io", url: "" },
    { label: "LinkedIn", url: "" },
  ],
};
