import MoreInfos from "./MoreInfos";
import "./UserCard.css";
import UserStats from "./UserStats";

function UserCard() {
  const userBio = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.";

  return (
    <div className="user-card">
      <img
        className="desktop-view-element"
        src={"image-src"}
        alt="profile picture"
      />

      <section className="user-card-info">
        <div className="user-card-header">
          <img className="mobile-view-element" src="" alt="profile picture" />

          <div className="user-card-name">
            <div>
              <h1>{"The Octocat"}</h1>
              <a className="github-link" href="#">
                {"@octocat"}
              </a>
              <p className="joined-date mobile-view-element">
                {"Joined 25 Jan 2011"}
              </p>
            </div>
            <p className="joined-date desktop-view-element">
              Joined 25 Jan 2011
            </p>
          </div>
        </div>
        {userBio 
          ? <p className="user-bio">{userBio}</p>
          : <p className="user-bio not-available">This profile has no bio</p>
        }
        <UserStats repoCount={8} totalFollowers={25} totalFollowing={20} />
        <MoreInfos
          location={"San Francisco"}
          companyLink={"@github"}
          // twitterLink={"twitter-link"}
          // websiteLink={"website-link"}
        />
      </section>
    </div>
  );
}

export default UserCard;
