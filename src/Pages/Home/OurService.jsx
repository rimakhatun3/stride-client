import React from 'react';
import online from "../../assets/onlineOrder.png"
import ret from "../../assets/return.png"
import payment from "../../assets/payment.png"
import img from "../../assets/shoping.png"


const OurService = () => {
    return (
        <div>
            <h1 className='font-bold text-3xl mt-24 mb-16 text-center'>Our Online Top Service</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
            <div className='flex flex-col justify-center items-center border bg-white px-10 py-5 rounded-lg shadow-md'>
<img src={img} alt="" />
<h1 className='font-semibold text-2xl my-4 text-center'>Worldwide Shipping
</h1>
<p className='text-center'>Free Shipping On Order Over $100</p>
            </div>
            <div className='flex flex-col justify-center items-center border bg-white px-10 py-5 rounded-lg shadow-md'>
<img src={online} alt="" />
<h1 className='font-semibold text-2xl my-4 text-center'>Order Online Service
</h1>
<p className='text-center'>Free return products in 30 days</p>
            </div>
            <div className='flex flex-col justify-center items-center border bg-white   rounded-lg shadow-md'>
<img src={payment} alt="" />
<h1 className='font-semibold text-2xl my-4'>Payment
</h1>
<p>Secure System</p>
            </div>
            <div className='flex flex-col justify-center items-center border bg-white px-10 py-5 rounded-lg shadow-md'>
<img src={ret} alt="" />
<h1 className='font-semibold text-2xl my-4 text-center'>Return 30 Days
</h1>
<p className='text-center'>Free return products in 30 days</p>
            </div>
        </div>
        </div>
    );
};

export default OurService;