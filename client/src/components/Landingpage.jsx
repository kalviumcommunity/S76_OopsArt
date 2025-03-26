import React from "react";
import "../components/Landingpage.css"; // Import the CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <h1>OopsArt</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Showcasing the Funniest & Weirdest Art</h1>
        <p>Dive into a world of bizarre, creative, and out-of-the-box artwork.</p>
        <button>Explore the Gallery</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <img src="https://via.placeholder.com/150" alt="Weird Art Collection" />
          <h3>Weird Art Collection</h3>
          <p>Explore an exclusive collection of the most unusual and hilarious artworks.</p>
        </div>
        <div className="feature">
          <img src="https://via.placeholder.com/150" alt="Creative Madness" />
          <h3>Creative Madness</h3>
          <p>Experience the quirkiest and most unexpected artistic expressions.</p>
        </div>
        <div className="feature">
          <img src="https://via.placeholder.com/150" alt="Community Fun" />
          <h3>Community Fun</h3>
          <p>Join a community that appreciates and celebrates the odd side of creativity.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 OopsArt. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
