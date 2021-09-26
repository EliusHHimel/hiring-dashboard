import React from 'react';
import './Choosed.css';

const Choosed = (props) => {
    const { choosed } = props;
    let totalChoosed = 0;
    let total = 0;
    let applicantName = [];
    // set the quantity
    for (const applicant of choosed) {
        if (!applicant.quantity) {
            applicant.quantity = 1;
        }

        // Check if the name, salary and quantity already exist in the choosen people list
        if (applicantName.indexOf(applicant.name) === -1) {
            applicantName.push(applicant.name);
            total = total + applicant.salary * applicant.quantity; //total salary budget consumed
            totalChoosed = totalChoosed + applicant.quantity; //total choosed employee
        }
    }
    return (
        <div className="budget-consume-amount">
            <h4>Total People Selected: {totalChoosed}</h4>
            <br />
            <h4>Total Budget Consumed: {total}</h4>
            <br />
            {/* Choosen Peoples List */}
            <h4>People you've choosen to hire:</h4>
            <ol>
                {
                    applicantName.map(name => <li key={name}>{name}</li>)
                }
            </ol>
            <button className="confirm-hire-btn">Confirm Hire</button>
        </div>
    );
};

export default Choosed;