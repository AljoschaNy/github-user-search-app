import MoreInfos from "./MoreInfos";
import "./UserCard.css";
import UserStats from "./UserStats";

function UserCard() {
  const userBio = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.';
  const joinedDate = 'Joined 25 Jan 2011'

  return (
    <div className="user-card">
      <img
        className="desktop-view-element"
        src={"image-src"}
        alt="profile picture"
      />

      <section className="user-card-info">
        <header className="user-card-header">
          <img className="mobile-view-element" src="" alt="profile picture" />
          <div className="user-card-name">
            <div>
              <h1>{"The Octocat"}</h1>
              <a className="github-link" href="#">
                {"@octocat"}
              </a>
              <p className="joined-date mobile-view-element">
                {joinedDate}
              </p>
            </div>
            <p className="joined-date desktop-view-element">
              {joinedDate}
            </p>
          </div>
        </header>
        {userBio 
          ? <p className="user-bio">{userBio}</p>
          : <p className="user-bio not-available">This profile has no bio</p>
        }
        <UserStats repoCount={8} totalFollowers={25} totalFollowing={20} />
        <MoreInfos
          location={"San Francisco"}
          companyLink={"@github"}
        />
      </section>
    </div>
  );
}

export default UserCard;
