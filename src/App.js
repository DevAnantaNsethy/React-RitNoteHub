import React from "react";
import "./App.css"; // Import global styles

// Import Components
import Header from "./components/header";
import Hero from "./components/hero";
import Categories from "./components/categories";
import QuestionPaperLink from "./components/QuestionPaperLink";
import FirstYearSubjects from "./components/FirstyearSubjects";
import FloatingArrow from "./components/Floatingaroow";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {" "}
      {/* Or use React.Fragment <> </> if no wrapper div needed */}
      <Header />
      <main>
        {" "}
        {/* Added <main> tag for semantic structure */}
        <Hero />
        <Categories />
        <QuestionPaperLink />
        <FirstYearSubjects />
      </main>
      <FloatingArrow />
      <Footer />
    </div>
  );
}

export default App;
