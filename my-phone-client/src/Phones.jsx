import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData();
    // console.log(phones);
    return (
        <div>
            <h3>All phone here {phones.length}</h3>
            {
                phones.map(phone => <li key={phone.id}>
                    <Link to={`/phone/${phone.id}`}>
                        {phone.name}
                    </Link>
                </li>)
            }
        </div>
    );
};

export default Phones;