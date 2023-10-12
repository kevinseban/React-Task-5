import React, { useState } from 'react';

function AgeCalculator() {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge = () => {
        if (birthdate) {
            const birthdateDate = new Date(birthdate);
            const today = new Date();
            const ageDiffInMilliseconds = today - birthdateDate;
            const ageDiffInYears = Math.floor(ageDiffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
            setAge(ageDiffInYears);
        }
    };

    return (
        <div className='container'>
            <h1>Age Calculator</h1>
            <div style={{ marginBottom: "10px" }}>Enter your date of birth: </div>
            <input
                style={{ width: "100%", marginBottom: "10px" }}
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
            /> <br />
            <button className='btn' onClick={calculateAge}>Calculate Age</button>
            {age !== null && (<h2>Your are {age} years old</h2>)}
        </div>
    );
}

export default AgeCalculator;
