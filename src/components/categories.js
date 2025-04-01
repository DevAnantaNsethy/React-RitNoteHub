import React from "react";

// Note: Links like "cse.html" will cause full page reloads.
// For a true Single Page App (SPA), you'd use React Router and replace
// these with <Link> components. For this direct conversion, we keep them.

function Categories() {
  return (
    <section className="categories" id="branch-category">
      <h2>Select Branches of B.tech</h2>
      <h3>Choose the Branch you're studying.</h3>
      <div className="category-cards">
        {/* Anchor link within the same page */}
        <div className="category-card">
          <a href="#1st_year">First Year</a>
        </div>
        {/* Links to other potential HTML pages (will reload) */}
        <div className="category-card">
          <a href="cse.html">Computer Science & Engineering</a>
        </div>
        <div className="category-card">
          <a href="mech.html">Mechanical Engineering</a>
        </div>
        <div className="category-card">
          <a href="civil.html">Civil Engineering</a>
        </div>
        <div className="category-card">
          <a href="EE.html">Electrical Engineering</a>
        </div>
        <div className="category-card">
          <a href="ece.html">Electrical & communication Engineering</a>
        </div>
      </div>
      {/* Note: Original HTML had a nested empty category-cards div, removed here */}
    </section>
  );
}

export default Categories;
