import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    console.log(phone);
    return (
        <div>
            <h3>Phone Details</h3>
            <h4>{phone.name}</h4>
            <img src={phone.image} alt="" />
        </div>
    );
};

export default Phone;