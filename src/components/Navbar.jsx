import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container mx-auto bg-purple-700 text-white'>
            <div className='flex h-[75px] justify-between items-center px-10'>
                <h3 className='text-3xl font-bold'>NAVBAR</h3>
                <ul className='flex gap-10'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/library'>Library</Link></li>
                    <li><Link to='/settings'>Settings</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
