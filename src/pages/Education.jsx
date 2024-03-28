import React from "react";
import Section from "../components/Section";
import MasterDegree from "../assets/master.jpg"

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">The University of Toronto</h3>
          <div className="subheading mb-3">APPLIED SCIENCE AND INFORMATION TECHNOLOGY</div>
          <div className="subheading mb-4">Master of Applied Science</div>
          <div>Computer Science, Mathematics, Data Structures, Algorithms, OOPs, OS, DBMS, Web Development, Big Data</div>
          <img
            src={MasterDegree}
            alt="Robel Cartoon"
            style={{height: '40vh', width: '60vh'}}
          />
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">September 2010 - June 2014</span>
        </div>
      </div>
    </Section>
  );
}
