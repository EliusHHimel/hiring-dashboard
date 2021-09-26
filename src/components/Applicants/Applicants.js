import React, { useEffect, useState } from 'react';
import Applicant from '../Applicant/Applicant';
import './Applicants.css'

const Applicants = () => {
    const [applicantsData, setApplicantsData] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hmeliushossainhimel/fake-data/main/applicants.JSON')
            .then(res => res.json())
            .then(data => setApplicantsData(data))
    }, [])

    return (
        <div className="applicants-container">
            {
                applicantsData.map(applicant => <Applicant key={applicant.key} applicant={applicant}></Applicant>)
            }
        </div>
    );
};

export default Applicants;