import React from 'react';
import './Choosed.css';

const Choosed = (props) => {
    const { choosed } = props;
    let totalChoosed = 0;
    let total = 0;
    for (const people of choosed) {
        if (!people.quantity) {
            people.quantity = 1;
        }
        total = total + people.salary * people.quantity;
        totalChoosed = totalChoosed + people.quantity;
    }

    return (
        <div className="budget-consume-amount">
            <h4>Total People Selected: {totalChoosed}</h4>
            <h4>Total Budget Consumed: {total}</h4>
        </div>
    );
};

export default Choosed;