import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">
        {/* Assuming Logo.jpeg is in public/images/ */}
        <img src="/images/Logo.jpeg" alt="RIT University Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#branch-category">Branches</a>
          </li>
          <li>
            <a href="#question-paper-link">Question papers</a>
          </li>
          <li>
            <a href="#footer">About</a>
          </li>
          <li>
            <a href="#help">Help</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
