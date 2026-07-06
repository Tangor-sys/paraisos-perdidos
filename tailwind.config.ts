import type { Config } from "tailwindcss";
const config: Config = { content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./data/**/*.{ts,tsx}"], theme:{extend:{colors:{paper:"#F7F2EA",ink:"#181512",oldgold:"#A57B3E",wine:"#5E1F22",stone:"#8A8178"},fontFamily:{serif:["Georgia","Times New Roman","serif"],sans:["Arial","Helvetica","sans-serif"]}}}, plugins:[require("@tailwindcss/typography")] };
export default config;
