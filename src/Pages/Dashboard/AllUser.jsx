import React, { useEffect, useState } from 'react';
import UserRow from '../../Components/Dashboard/UserRow';

const AllUser = () => {

    const [user ,setUser] = useState([])
const token = localStorage.getItem("token")
    useEffect(()=>{
fetch('https://assinment-server-alpha.vercel.app/user',{
  headers:{
    authorization: `Bearer ${token}`
  }
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    setUser(data)
})
    },[])

    return (
        <div>
          <div className="overflow-x-auto mt-14">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Photo</th>
        <th>Name</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>

      </tr>
    </thead>
    <tbody >
     
     {user?.map((singleUser,index)=><UserRow key={singleUser._id} index={index} singleUser={singleUser}></UserRow>)}

      
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;
