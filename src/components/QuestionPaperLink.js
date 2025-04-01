import React from "react";

function QuestionPaperLink() {
  const goToQuestions = () => {
    // This navigates to a different HTML page, causing a reload.
    // Use React Router's navigation methods for SPA behavior.
    window.location.href = "questions.html";
  };

  return (
    <section id="question-paper-link" className="question-paper-section">
      <h2>Access Previous Year Question Papers</h2>
      <p>
        Prepare better by exploring the previous year question papers organized
        by branch and year.
      </p>
      <button onClick={goToQuestions} className="btn-access-questions">
        Go to Question Papers
      </button>
    </section>
  );
}

export default QuestionPaperLink;
