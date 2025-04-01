import React from "react";

// Data could be fetched or passed as props in a more complex app
const firstYearSubjectsData = [
  { id: 1, name: "Mathematics I", code: "SUB101" },
  { id: 2, name: "Mathematics II", code: "SUB102" },
  { id: 3, name: "Chemistry", code: "SUB103" },
  { id: 4, name: "Physics", code: "SUB103" }, // Note: Duplicate code?
  { id: 5, name: "Basic Electrical Engineering", code: "SUB103" },
  { id: 6, name: "Basic Electronics Engineering", code: "SUB103" },
  { id: 7, name: "Engineering Mechanics", code: "SUB103" },
  { id: 8, name: "Programming in C & Data structure", code: "SUB103" },
  { id: 9, name: "Basic Mechanical Engineering", code: "SUB103" },
  { id: 10, name: "Basic Civil Engineering", code: "SUB103" },
  { id: 11, name: "English for technical writing", code: "SUB103" },
  { id: 12, name: "Universal Human Value", code: "SUB103" },
];

function FirstYearSubjects() {
  return (
    // Original HTML had nested sections (id="4th-sem", id="1st_year")
    // Combining into one logical component section here with id="1st_year"
    <section className="subjects" id="1st_year">
      {" "}
      {/* Removed 3rd-sem class unless needed */}
      <h2>Subjects List Of First year.</h2>
      <table id="subjectsTable" className="subjects">
        {" "}
        {/* Removed space in original id */}
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Subject Name</th>
            <th>Subject Code</th>
            <th>Module</th>
          </tr>
        </thead>
        <tbody>
          {firstYearSubjectsData.map((subject, index) => (
            <tr key={subject.id}>
              <td>{index + 1}</td>
              <td>{subject.name}</td>
              <td>{subject.code}</td>
              <td>
                {/* These links currently point to non-existent anchors */}
                {/* You'll need actual content/routes for modules */}
                <a href={`#module1-${subject.code}`}>Module 1</a>
                <br />
                <a href={`#module2-${subject.code}`}>Module 2</a>
                <br />
                <a href={`#module3-${subject.code}`}>Module 3</a>
                <br />
                <a href={`#module4-${subject.code}`}>Module 4</a>
                <br />
                <a href={`#module5-${subject.code}`}>Module 5</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default FirstYearSubjects;
