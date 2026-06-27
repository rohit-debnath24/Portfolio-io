import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://rohitkumardebnath.me",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const GITHUB_USERNAME = "rohitkumardebnath";
export const SOURCE_CODE_GITHUB_REPO = "rohitkumardebnath/My-Portfolio";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/rohitkumardebnath/My-Portfolio";

export const UTM_PARAMS = {
  utm_source: "https://rohitkumardebnath.me",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
