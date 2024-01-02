import { UserStatsProps } from "../../type/types";
import "./UserStats.css";

function UserStats({ repoCount, totalFollowers, totalFollowing }: Readonly<UserStatsProps>) {
  return (
    <section className="user-stats">
      <div className="user-stat">
        <h4>Repos</h4>
        <p>{repoCount}</p>
      </div>
      <div className="user-stat">
        <h4>Followers</h4>
        <p>{totalFollowers}</p>
      </div>
      <div className="user-stat">
        <h4>Following</h4>
        <p>{totalFollowing}</p>
      </div>
    </section>
  );
}

export default UserStats;
