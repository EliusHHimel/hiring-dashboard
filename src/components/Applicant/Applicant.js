import React from 'react';
import './Applicant.css'

const Applicant = (props) => {
    const { img, name, age, gender, department, role, salary } = props.applicant;
    return (
        <div className="applicant">
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <h4>Age: {age}</h4>
            <h4>Gender: {gender}</h4>
            <h4>Department: {department}</h4>
            <h4>Position: {role}</h4>
            <h4>Salary: {salary}</h4>
            <button>Hire</button>
        </div>
    );
};

export default Applicant;