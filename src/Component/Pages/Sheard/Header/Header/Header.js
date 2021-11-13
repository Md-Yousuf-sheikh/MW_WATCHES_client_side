import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', hideMenu);

        return () => {
            window.removeEventListener('resize', hideMenu);
        };
    }, [window.innerWidth]);

    return (
        <div>
            <Navigation toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
        </div>
    );
};

export default Header;