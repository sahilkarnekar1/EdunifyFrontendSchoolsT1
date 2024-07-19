import React from 'react';
import "./SchoolCard.css";

const SchoolCard = ({ school }) => {
    return (
        <div className="school-card">
            {school.image ? (
                <img src={`https://edunify-backend-schools-t2.vercel.app/schoolImages/${school.image}`} alt={school.name} />
            ) : (
                <div className="placeholder">
                    <span>{school.name}</span>
                </div>
            )}
            <div className="school-info">
                <h3>{school.name}</h3>
                <p>{school.address}</p>
                <p>{school.city}</p>
                <button className="apply-button">Apply Now</button>
            </div>
        </div>
    );
};

export default SchoolCard;
