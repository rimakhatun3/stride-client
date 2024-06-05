import React from 'react';
import { useLoaderData } from 'react-router-dom';


const EditUser = () => {

    const userData = useLoaderData()
    console.log(userData)
    const token = localStorage.getItem("token")

    const HandleEdit = async(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        const userInfo ={
            name,email,password
        }

     await fetch(`https://assinment-server-alpha.vercel.app/user/${userData._id}`,{
        method:"PATCH",
        headers:{
            "Content-type":"application/json",
            authorization: `Bearer ${token}`
        },
        body:JSON.stringify(userInfo)
     })
     .then(result=>{
        console.log(result)
        alert("product update success")
     })

    }

    return (
        <div className='w-full mx-auto pe-8 bg-stone-50'>
<h1 className='text-3xl font-bold text-center my-10'>Edit User </h1>
            <form onSubmit={HandleEdit}>
                <div className='flex flex-row justify-center items-center  '>
               
                <div className='w-1/2'>
                    <p className='mb-2 ms-2'>User Name</p>
                  <input  className='px-4 py-2 border rounded-lg w-full' defaultValue={userData?.name} type="text" name="name" id="" />
                </div>
                </div>
                <div className='flex flex-row justify-center items-center  '>
                <div className='w-1/2 mx-9'>
                    <p className='my-2 ms-2'>Email</p>
                    <input className=' px-4 py-2 border rounded-lg w-full ' type="text" name="email" defaultValue={userData?.email} id="" />
                </div>
                <div className='w-1/2'>
                    <p className='my-2 ms-2'>Password</p>
                  <input className='px-4 py-2 border rounded-lg w-full' type="text" name="password" defaultValue={userData?.password} id="" />
                </div>
                </div>
                
                <div className='w-full mx-9 flex justify-center mt-3 pb-8'>
                    <input className='btn btn-primary w-1/2' type="submit" value="Edit Now" />
                </div>
            </form>
        </div>
    );
};

export default EditUser;