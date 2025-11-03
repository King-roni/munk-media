export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/munkmediaagency/",
  linkedin: "https://www.linkedin.com/in/matisse-unkel-242692395/",
  tiktok: "https://www.tiktok.com/@munk.media?_r=1&_t=ZN-915mgT7pcmc",
  x: "https://x.com/MediaMunk",
} as const;

export type SocialKey = keyof typeof SOCIAL_LINKS;

