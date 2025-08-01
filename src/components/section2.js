import React, { Component } from "react";

class Section2 extends Component {
  state = {};

  render() {
    return (
      <section
        className="about-me py-2 bg-light"
        id="qualification"
        style={{
          height: "400px",
          border: "1px solid #dcdcdc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          scrollMargin: "80px"
        }}
      >
        <div className="container">
          <h2 className="text-center mb-4">Qualifications</h2>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Institution</th>
                <th>Year</th>
                <th>Percentage/CGPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Matriculation</td>
                <td>RPS Public School</td>
                <td>2018 - 2019</td>
                <td>64%</td>
              </tr>
              <tr>
                <td>Intermediate</td>
                <td>Nalanda College</td>
                <td>2019 - 2021</td>
                <td>68.4%</td>
              </tr>
              <tr>
                <td>Bachelor of Computer Applications (BCA)</td>
                <td>Chandigarh University</td>
                <td>2021 - 2024</td>
                <td>7.21</td>
              </tr>
              <tr>
                <td>Master of Computer Applications (MCA)</td>
                <td>Chandigarh University</td>
                <td>2024 - Present</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Section2;
