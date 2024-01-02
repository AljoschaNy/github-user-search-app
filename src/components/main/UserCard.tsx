function UserCard() {
    return (
        <div className="user-card">
            <img className="desktop-view-element"/>
            <section className="user-card-info">
                <div className="user-card-header">
                    <img className="mobile-view-element"/>
                    <div className="user-card-name">
                        <div>
                            <h2>The Octocat</h2>
                            <p>@octocat</p>
                        </div>
                        <p className="joined-date">Joined 25 Jan 2011</p>
                    </div>
                    
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                <section className="user-stats">
                    <div className="user-stat">
                        <p>Repos</p>
                        <p>8</p>
                    </div>
                    <div className="user-stat">
                        <p>Followers</p>
                        <p>856</p>
                    </div>
                    <div className="user-stat">
                        <p>Following</p>
                        <p>28</p>
                    </div>
                </section>
                <ul>
                    <li>San Francisco</li>
                    <li>Not Available</li>
                    <li>https://github.blog</li>
                    <li>@github</li>
                </ul>
            </section>
        </div>
    );
}

export default UserCard;
