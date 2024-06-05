import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductRow = ({product,index,handleDelete}) => {
    const {brand,title,image_url,category,price,_id,quantity} = product || {}
    const token = localStorage.getItem("token")

    const onDelete = ()=>{
       fetch(`https://assinment-server-alpha.vercel.app/product/${_id}`,{
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
          handleDelete(_id)
       })
    }

    return (
        <tr>
        <td>
         {index}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image_url} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{brand}</div>
              <div className="text-sm opacity-50">{title}</div>
            </div>
          </div>
        </td>
        <td>
         
          
        {category}
        </td>
        <td>{price}</td>
        <td>{quantity}</td>
        <th>
         <Link to={`editProduct/${_id}`}> <button className="btn btn-primary ">Edit</button></Link>
        </th>
        <th>
          <button onClick={onDelete} className="btn btn-error">Delete</button>
        </th>
      </tr>
    );
};

export default ProductRow;