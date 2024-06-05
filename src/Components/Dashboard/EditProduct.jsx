import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditProduct = () => {

    const productData = useLoaderData()
    console.log(productData)

    const [category, setCategory] = useState('');
    const token = localStorage.getItem("token")

    const HandleEditProduct = async (e)=>{
        e.preventDefault()
        
        const form = e.target;
        const image_url = form.image_url.value
        const title = form.title.value
        const brand = form.brand.value
        const price = form.price.value
        const description = form.description.value
        const quantity = form.quantity.value
        
        const itemData = {
            image_url,
            quantity,
            title,
            brand,
            price,
            description,
            category
        }
        
        console.log(itemData)
        
          await fetch(`https://assinment-server-alpha.vercel.app/product/${productData._id}`,{
            method:"PATCH",
            headers:{
                "Content-type":"application/json",
                authorization: `Bearer ${token}`
            },
            body:JSON.stringify(itemData)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.acknowledged === true
              ){
                Swal.fire({
                    title: "Good job!",
                    text: "Product update succes",
                    icon: "success"
                  });
            }

            form.reset()
            
          })
        
        
        
        }


    return (
        <div className='w-full mx-auto pe-8 bg-stone-50'>
        <h1 className='text-3xl font-bold text-center my-10'>Edit Item </h1>
                    <form onSubmit={HandleEditProduct}>
                        <div className='flex flex-row justify-center items-center w-full gap-5  '>
                        <div className='w-1/2 mx-9'>
                            <p className='mb-2 '>Image Url</p>
                            <input className=' px-4 py-2 border rounded-lg w-full ' type="text" defaultValue={productData?.image_url}  name="image_url" id="" />
                        </div>
                        <div className='w-1/2'>
                        <p className='my-2 '>Title</p>
                          <input  className='px-4 py-2 border rounded-lg w-full'  type="text" defaultValue={productData?.title} name="title" id="" />
                        </div>
                        <div className='w-1/2'>
                        <p className='my-2 ms-2'>Quantity</p>
                          <input  className='px-4 py-2 border rounded-lg w-full '  type="text" defaultValue={productData?.quantity} name="quantity" id="" />
                        </div>
                        </div>
                        <div className='flex flex-row justify-center items-center ms-10 gap-6  '>
                       
                        <div className='w-1/2'>
                            
                        
                            <p className='my-2 ms-2'>Brand</p>
                            <input className=' px-4 py-2 border rounded-lg w-full ' type="text" name="brand" defaultValue={productData?.brand}  id="" />
                        </div>
                        <div className='w-1/2'>
                            <p className='my-2 ms-2'>Price</p>
                          <input className='px-4 py-2 border rounded-lg w-full' type="text" name="price"  defaultValue={productData?.price} id="" />
                        </div>
                        <div className='w-1/2 '>
                            <p className='my-2 ms-2'>Category</p>
                            <label className="  ">
         
          <select defaultValue={productData?.category}  value={category} onChange={(e)=>setCategory(e.target.value)} className="px-4 py-2 border rounded-lg w-full">
            <option value="">Select Category</option>
            <option value="Refrigerator">Refrigarator</option>
            <option value="Television">Television</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Home appliance">Home appliance</option>
          </select>
        </label>
                        </div>
                        </div>
                        <div className='w-full mx-9'>
                        <p className='my-2 ms-2'>Description</p>
                      <textarea rows={3} cols={92}  className='px-4 py-4 border rounded-lg ' name="description"  id=""></textarea>
                        </div>
                        <div className='w-full mx-9 flex justify-center mt-3 pb-8'>
                            <input className='btn btn-primary w-1/2' type="submit" value="Edit Now" />
                        </div>
                    </form>
                </div>
    );
};

export default EditProduct;