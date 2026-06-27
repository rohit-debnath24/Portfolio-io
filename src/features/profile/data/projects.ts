import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "algoslice",
    title: "AlgoSlice",
    period: { start: "03.2026" },
    link: "", // Assuming no link provided, can be filled later
    skills: ["React JS", "Python", "Rust", "CUDA", "Docker"],
    isExpanded: true,
    description: `A prototype project on Algorand that explores remote access to GPU resources for developers who need computing power for heavy workloads. The application experiments with enabling users to utilize shared GPU infrastructure to run tasks without owning expensive hardware.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=AlgoSlice",
  },
  {
    id: "nanobonds",
    title: "NanoBonds",
    period: { start: "01.2026" },
    link: "",
    skills: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Solidity"],
    isExpanded: true,
    description: `NanoBonds is a decentralized finance (DeFi) platform that democratizes access to government bonds. It enables retail users to invest in fractional units of government bonds using stablecoins, providing a transparent, secure, and highly accessible investment experience through blockchain technology.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=NanoBonds",
  },
];
