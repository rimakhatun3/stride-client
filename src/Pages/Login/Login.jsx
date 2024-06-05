
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../.././assets/loginLogo.svg"

import UseAuth from "../../Hook/UseAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin";
import { useRef } from "react";
const Login = () => {
const navigate = useNavigate()
const location = useLocation()
const from = location?.state?.from?.pathname || '/' 
const {signIn,resetPassword} = UseAuth()
const emailRef = useRef()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    signIn(email,password)
    .then(result=>{
        console.log(result)
if(result?.user?.email){
  const userInfo ={
    email:result?.user?.email,
    name: name,
    password: password, 
  }
  fetch("https://assinment-server-alpha.vercel.app/user",{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(userInfo)
  })
  .then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error.message)
})
} Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Done",
            showConfirmButton: false,
            timer: 1500
          });

          navigate(from,{replace:true})

    })
    .catch(error=>{
        console.log(error.message)
    })
}
  
const handleForgetPassword =(e)=>{
  const email = emailRef.current.value
  if(!email){
    alert("please provide your email Addrees")
  }
  resetPassword(email)
  .then(()=>{
    alert("please check your email")
  })
  .catch(error=>{
    console.log(error.message)
  })
}

    return (
     
     <div className="flex flex-col justify-center items-center bg-zinc-50 w-8/12 mx-auto mt-8 pb-16">

<div className="flex flex-col justify-center items-center space-y-5 py-8 px-8">
  <img className="w-24 h-24" src={logo} alt="" />
  <h1 className="text-3xl font-bold  text-center">Sign In To Your Account</h1>
</div>
<form onSubmit={handleSubmit} className="w-full ">
  <div className=" mx-14 " >
    <p className="my-2">Name</p>
    <input className="border w-full    px-4 py-2 rounded-md " placeholder="Enter Your Name" type="text" name="name" id="" />
  </div>
  <div className=" mx-14 " >
    <p className="mb-2 mt-4">Email</p>
    <input className="border w-full    px-4 py-2 rounded-md " placeholder="Enter Your Eamil" type="text" name="email" ref={emailRef} id="" />
  </div>
  
  <div className=" mx-14 " >
    <p className="mb-2 mt-4">Password</p>
    <input className="border w-full    px-4 py-2 rounded-md " placeholder="Enter Your Name" type="text" name="password" id="" />
  </div>
  <div className="flex justify-between items-center mx-14 my-4">
  <div className="flex gap-3">
    <input type="checkbox" name="" id="" />
    <p>Remember me</p>
  </div>

  <button onClick={handleForgetPassword} className="btn btn-link">Forget Password </button>
  </div>

  <div className="flex flex-co flex-auto justify-center items-center mb-4">
    <button className="btn btn-primary w-9/12 ">Login</button>
    
    
  </div>
  <div>
  <p className="text-end me-24">New To this site please <Link className="btn btn-link" to='/register'>Register</Link></p>
  </div>
 <div>
 <div className="divider w-8/12 mx-auto mb-8 ">Or Continue with</div>
 <SocialLogin/>
 </div>
</form>
     </div>
    );
};

export default Login;