import React, { useState, useEffect } from "react";

// Placeholder data for search - replace with your actual data source/logic
const allNotesAndCourses = [
  { id: 1, title: "Mathematics I Notes", type: "Notes" },
  { id: 2, title: "Physics Course Outline", type: "Course" },
  { id: 3, title: "Chemistry Module 1", type: "Notes" },
  { id: 4, title: "Programming in C Subject Info", type: "Subject" },
  // ... add more items
];

function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    // Basic filtering logic (case-insensitive)
    const results = allNotesAndCourses.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);

    // In a real app, you might debounce this search or fetch from an API
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="hero">
      <h1>Welcome to the R.I.T Notes Hub</h1>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          id="searchBar"
          placeholder="Search notes, courses, or subjects..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchResults.length > 0 && (
          <div id="searchResults" className="search-results">
            {/* Render search results - customize as needed */}
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>
                  {/* Make these links point somewhere useful */}
                  <a href={`#item-${result.id}`}>
                    {result.title} ({result.type})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Basic implementation adds results below input */}
        {/* You might want a more sophisticated dropdown */}
      </div>

      <p>
        Your one-stop solution for all academic notes and resources for B.Tech
        Students!. Explore, download, and excel in your studies!📑
      </p>
      <p>
        From first-year essentials to advanced semester materials, everything
        you need is just a click away.
      </p>
      <p>
        First, you need to choose your branch, and then select your year of
        study to access notes. We've got you covered.
      </p>
      <p>
        You can also get previous year questions to enhance your
        preparation!😊👍
      </p>

      {/* Moving News Text */}
      <div className="moving-text">
        <p>
          📣 Latest Update: New study materials added for CSE, ME, and EE! |
          Check out previous year questions for better preparation! 📚
        </p>
      </div>
    </section>
  );
}

export default Hero;
