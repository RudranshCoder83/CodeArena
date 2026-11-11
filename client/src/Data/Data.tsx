import { SwordsIcon, CodeIcon, TrophyIcon } from "../Components/Icons";

export const steps = [
  {
    number: "01",
    title: "Enter the Queue",
    text: "Click 'Find Match'. Our Redis-powered matchmaking pairs you with an opponent of similar Elo in seconds.",
    Icon: SwordsIcon,
  },
  {
    number: "02",
    title: "Head-to-Head Coding",
    text: "Both players get the same problem. Write your solution in a professional editor and run it against live test cases.",
    Icon: CodeIcon,
  },
  {
    number: "03",
    title: "Win and Climb",
    text: "The first to pass all tests wins. Gain Elo, build your daily streak, and rise up the global ranks.",
    Icon: TrophyIcon,
  },
];

export const users = [
  { rank: "01", initials: "AK", name: "async_killer", tag: "@async_killer", wins: "342", streak: "28", elo: "2,450", color: "#d4ff24" },
  { rank: "02", initials: "NF", name: "nullforce", tag: "@nullforce", wins: "319", streak: "12", elo: "2,387", color: "#7688ff" },
  { rank: "03", initials: "CB", name: "code_bender", tag: "@code_bender", wins: "288", streak: "19", elo: "2,321", color: "#ff934f" },
  { rank: "04", initials: "SV", name: "segfault_v", tag: "@segfault_v", wins: "256", streak: "08", elo: "2,284", color: "#51d0ff" },
  { rank: "05", initials: "RX", name: "recursion_x", tag: "@recursion_x", wins: "241", streak: "15", elo: "2,190", color: "#d380ff" },
];