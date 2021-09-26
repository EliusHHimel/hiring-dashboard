import React, { useEffect, useState } from 'react';
import Applicant from '../Applicant/Applicant';
import Choosed from '../Choosed/Choosed';
import './Applicants.css'

const Applicants = () => {
    const [applicantsData, setApplicantsData] = useState([]);
    const [choosed, setChoosed] = useState([]);

    // Get applicants data
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/hmeliushossainhimel/fake-data/main/applicants.JSON')
            .then(res => res.json())
            .then(data => setApplicantsData(data))
    }, [])

    //handle choosed applicants
    const handleChoosedApplicants = (applicant) => {
        const newChoosed = [...choosed, applicant];
        setChoosed(newChoosed);
    }

    return (
        <div>
            <h2 className="application-count">Application Received: {applicantsData.length}</h2>
            <div className="dashboard-body">
                <div className="applicants-container">
                    {
                        applicantsData.map(applicant => <Applicant key={applicant.key} applicant={applicant}
                            handleChoosedApplicants={handleChoosedApplicants}></Applicant>)
                    }
                </div>
                <div>
                    <Choosed choosed={choosed}></Choosed>
                </div>
            </div >
        </div>
    );
};

export default Applicants;