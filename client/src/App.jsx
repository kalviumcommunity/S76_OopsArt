import React from "react";
import ASAPLandingPage from "./components/Landingpage";
import CourseCard from "./components/CourseCard";

function App() {
  const sampleCourse = {
    title: "Introduction to AI",
    description: "Learn the basics of AI and Machine Learning.",
    category: "Technology",
  };

  return (
    <div>
      <ASAPLandingPage />
      <div className="p-6">
        <CourseCard course={sampleCourse} />
      </div>
    </div>
  );
}


export default App;
