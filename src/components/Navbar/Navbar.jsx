import React, { useState } from 'react';
import List from '../List/List';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About Us", path: "/about" },
        { id: 3, name: "Contact Us", path: "/contact" },
        { id: 4, name: "Products", path: "/products" },
        { id: 5, name: "Services", path: "/services" },
    ];

    return (
        <nav className='bg-green-400'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === true ?
                            <XMarkIcon className="h-6 w-6 text-green-500" /> :
                            <Bars3Icon className="h-6 w-6 text-green-500" />
                    }
                </span>
            </div>

            <ul className={`md:flex md:static justify-center absolute duration-500 bg-green-400 pb-4 pl-8 py-3 ${open ? 'top-6' : '-top-48'}`}>
                {routes.map(route => <List
                    key={route.id}
                    route={route}
                ></List>)}
            </ul>

        </nav>
    );
};

export default Navbar;