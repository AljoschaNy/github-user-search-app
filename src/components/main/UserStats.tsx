import "./UserStats.css";

function UserStats() {
  return (
    <section className="user-stats">
      <div className="user-stat">
        <h4>Repos</h4>
        <p>8</p>
      </div>
      <div className="user-stat">
        <h4>Followers</h4>
        <p>856</p>
      </div>
      <div className="user-stat">
        <h4>Following</h4>
        <p>28</p>
      </div>
    </section>
  );
}

export default UserStats;
