import { UserCardProps } from "../../type/types";
import MoreInfos from "./MoreInfos";
import "./UserCard.css";
import UserStats from "./UserStats";

function UserCard({ userData }:Readonly<UserCardProps>) {
  return (
    <div className="user-card">
      <img
        className="desktop-view-element"
        src={userData.avatar_url}
        alt="profile picture"
      />

      <section className="user-card-info">
        <header className="user-card-header">
          <img className="mobile-view-element" src="" alt="profile picture" />
          <div className="user-card-name">
            <div>
              <h1>{userData.name}</h1>
              <a className="github-link" href="#">
                {'@' + userData.login}
              </a>
              <p className="joined-date mobile-view-element">
                {userData.created_at}
              </p>
            </div>
            <p className="joined-date desktop-view-element">
              {userData.created_at}
            </p>
          </div>
        </header>
        {userData.bio 
          ? <p className="user-bio">{userData.bio}</p>
          : <p className="user-bio not-available">This profile has no bio</p>
        }
        <UserStats repoCount={userData.public_repos} totalFollowers={userData.followers} totalFollowing={userData.following} />
        <MoreInfos
          location={userData.location}
          companyLink={userData.company}
          twitterLink={userData.twitter_username}
          websiteLink={userData.blog}
        />
      </section>
    </div>
  );
}

export default UserCard;
