export type ThemeToggleProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export type RegularButtonProps = {
  buttonText: string,
  onClick?: () => void
}

export type UserStatsProps = {
  repoCount: number,
  totalFollowers: number,
  totalFollowing: number
}

export type MoreInfosProps = {
  location?: string,
  twitterLink?: string,
  websiteLink?: string,
  companyLink?: string
}
