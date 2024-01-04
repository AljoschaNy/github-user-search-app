export type ThemeToggleProps = {
  theme: string;
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
  twitterName?: string,
  websiteLink?: string,
  company?: string
}

export type SearchbarProps = {
  setUserData: ({}:UserData) => void
}

export type UserCardProps = {
  userData: UserData
}

export type UserData = {
  avatar_url: string,
  name: string,
  login: string,
  created_at: string,
  bio: string | null,
  public_repos: number,
  followers: number,
  following: number,
  location: string | undefined,
  twitter_username: string | undefined,
  blog: string | undefined,
  company: string | undefined
}
