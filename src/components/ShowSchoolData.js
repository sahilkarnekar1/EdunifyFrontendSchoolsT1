import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SchoolCard from './SchoolCard';
import "./ListSchool.css";

const ShowSchoolData = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const fetchSchools = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/schools');
                setSchools(response.data);
            } catch (error) {
                console.error("There was an error fetching the school data!", error);
            }
        };

        fetchSchools();
    }, []);

    return (
        <div className="school-cards-container">
            {schools.map((school) => (
                <SchoolCard key={school.id} school={school} />
            ))}
        </div>
    );
};

export default ShowSchoolData
