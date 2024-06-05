import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserRow = ({singleUser,index,onDelete}) => {
const token = localStorage.getItem("token")
    const {name,email,_id,photo } = singleUser
const handleDelete=()=>{
  fetch(`https://assinment-server-alpha.vercel.app/user/${_id}`,{
    method:"DELETE",
    headers:{
      authorization: `Bearer ${token}`
    }
   })
   .then(res=>res.json())
   .then(data=>{
    Swal.fire({
        title: "Are you sure?",
        text: "Delete ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
      onDelete(_id)
   })
}
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
        <td><button onClick={handleDelete}  className='btn btn-error'>Delete</button></td>
      </tr>
    );
};

export default UserRow;