import React from "react";

function FloatingArrow() {
  const scrollToTop = () => {
    // Scrolls to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Alternatively, keep the original if smooth scroll isn't desired:
    // window.location.href = '#';
  };

  return (
    <button className="floating-arrow" onClick={scrollToTop}>
      &#8593; {/* Up arrow character */}
    </button>
  );
}

export default FloatingArrow;
