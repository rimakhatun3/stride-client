import React from 'react';
import { Link } from 'react-router-dom';

const UserRow = ({singleUser,index}) => {

    const {name,email,_id,photo } = singleUser

    return (
        <tr >
        <td>{index}</td>
        <td><div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div></td>
        <td>{name}</td>
        <td>{email}</td>
        <td><Link to={`edituser/${_id}`}><button  className='btn btn-primary'>Edit</button></Link></td>
        <td><button  className='btn btn-error'>Delete</button></td>
      </tr>
    );
};

export default UserRow;