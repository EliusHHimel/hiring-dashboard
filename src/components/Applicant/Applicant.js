import React from 'react';
import './Applicant.css'

const Applicant = (props) => {
    const { img, name, age, gender, department, role, salary } = props.applicant;
    return (
        <div className="applicant">
            <center><img src={img} alt="" /></center>
            <h3>Name: {name}</h3>
            <h4>Age: {age}</h4>
            <h4>Gender: {gender}</h4>
            <h4>Department: {department}</h4>
            <h4>Position: {role}</h4>
            <h3>Salary: {salary}</h3>
            <center>
                <button onClick={() => props.handleChoosedApplicants(props.applicant)}>Hire</button>
                <button>View Resume</button>
            </center>
        </div>
    );
};

export default Applicant;