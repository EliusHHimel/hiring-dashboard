import React from 'react';
import './Choosed.css';

const Choosed = (props) => {
    const { choosed } = props;
    let totalChoosed = 0;
    let total = 0;
    let applicantName = [];
    // set the quantity and total ammount of salary
    for (const applicant of choosed) {
        if (!applicant.quantity) {
            applicant.quantity = 1;
        }
        total = total + applicant.salary * applicant.quantity;
        totalChoosed = totalChoosed + applicant.quantity;
        // Check if the name already exist in the choosen people list
        if (applicantName.indexOf(applicant.name) !== 0) {
            applicantName.push(applicant.name);
        }
    }

    return (
        <div className="budget-consume-amount">
            <h4>Total People Selected: {totalChoosed}</h4>
            <br />
            <h4>Total Budget Consumed: {total}</h4>
            <br />
            <h4>People you've choosen to hire:</h4>
            <ul>
                {
                    applicantName.map(name => <li key={name}>{name}</li>)
                }
            </ul>
            <button className="confirm-hire-btn">Confirm Hire</button>
        </div>
    );
};

export default Choosed;