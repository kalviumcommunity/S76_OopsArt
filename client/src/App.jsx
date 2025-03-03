import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page inside App.jsx */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-900 text-white">
              {/* Navbar */}
              <header className="p-5 flex justify-between items-center">
                <h1 className="text-3xl font-bold">OopsArt</h1>
                <Link to="/explore" className="bg-blue-500 px-4 py-2 rounded">
                  Explore Now
                </Link>
              </header>

              {/* Hero Section */}
              <section className="flex flex-col items-center text-center mt-20 px-5">
                <h2 className="text-5xl font-bold">Weird, Funny, and Unexpected Art</h2>
                <p className="mt-4 text-lg">
                  Discover and share the craziest art creations on OopsArt.
                </p>
                <Link to="/signup" className="mt-6 bg-yellow-500 px-6 py-3 text-lg rounded">
                  Join Now
                </Link>
              </section>

              {/* Features Section */}
              <section className="mt-16 px-5 text-center">
                <h3 className="text-3xl font-semibold">Why OopsArt?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-gray-800 p-5 rounded-lg">
                    <h4 className="text-xl font-bold">Funny & Weird Art</h4>
                    <p>Explore bizarre and humorous art pieces from the community.</p>
                  </div>
                  <div className="bg-gray-800 p-5 rounded-lg">
                    <h4 className="text-xl font-bold">Upload Your Art</h4>
                    <p>Share your unique and funny creations with the world.</p>
                  </div>
                  <div className="bg-gray-800 p-5 rounded-lg">
                    <h4 className="text-xl font-bold">Engage & Interact</h4>
                    <p>Like, comment, and share art with fellow enthusiasts.</p>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="mt-16 p-5 text-center bg-gray-800">
                <p>© 2025 OopsArt - All rights reserved.</p>
              </footer>
            </div>
          }
        />

        {/* Other Routes */}
        <Route path="/explore" element={<div className="text-center p-10">Explore Page</div>} />
        <Route path="/signup" element={<div className="text-center p-10">Signup Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
