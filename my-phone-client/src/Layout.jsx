import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <h2>THIS IS MANE PAGE</h2>
            <Link to={'/'}>Home</Link>
            <Link to={'phones'}>Phones</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;