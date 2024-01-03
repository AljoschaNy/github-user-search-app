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

export type SearchbarProps = {
  setUserData: ({}:UserData) => void
}

export type UserData = {
  avatarUrl: string,
  name: string,
  login: string,
  createdAt: string,
  bio: string | null,
  publicRepos: number,
  followers: number,
  following: number,
  location: string | null,
  twitter_username: string | null,
  blog: string | null,
  company: string | null
}