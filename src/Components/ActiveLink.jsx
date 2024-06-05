import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) => isActive ? "text-primary underline pb-2 bg-white font-bold " : "text-black"
        }
      >
       {children}
      </NavLink>
    );
};

export default ActiveLink;