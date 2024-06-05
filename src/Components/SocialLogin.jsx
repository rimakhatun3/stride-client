import { FaFacebook } from "react-icons/fa"
import goggle from ".././assets/goggle.png"
import UseAuth from "../Hook/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
const {goggleLogin,facebookLogin} = UseAuth()
const navigate = useNavigate()
const location = useLocation()
const from = location?.state?.from?.pathname || '/' 
const token = localStorage.getItem("token")
const handleGoggleLogin =()=>{
goggleLogin()
.then((result)=>{
    console.log(result)
    if(result?.user?.email){
        const userInfo ={
          email:result?.user?.email,
          name:result?.user?.displayName,
          
          photo : result?.user?.photoURL
        }
        fetch("https://assinment-server-alpha.vercel.app/user",{
          method:"POST",
          headers:{
            "Content-type":"application/json",
            authorization: `Bearer ${token}`
          },
          body:JSON.stringify(userInfo)
        })
        .then(result=>{
            console.log(result)
           
        })
        .catch(error=>{
            console.log(error.message)
        })
      }
    navigate(from,{replace:true})
})
.catch(error=>{
    console.log(error.message)
})
}


const handleFacebookLogin =()=>{
  facebookLogin()
  .then((result)=>{
    console.log(result)
    if(result?.user?.email){
        const userInfo ={
          email:result?.user?.email,
          name:result?.user?.displayName,
          
          photo : result?.user?.photoURL
        }
        fetch("https://assinment-server-alpha.vercel.app/user",{
          method:"POST",
          headers:{
            "Content-type":"application/json",
            authorization: `Bearer ${token}`
          },
          body:JSON.stringify(userInfo)
        })
        .then(result=>{
            console.log(result)
           
        })
        .catch(error=>{
            console.log(error.message)
        })
      }
    navigate(from,{replace:true})
})
  .catch(error=>{
    console.log(error.message)
  })
}

    return (
        <div className="flex justify-center items-center gap-4">
    <button onClick={handleGoggleLogin} className="btn btn-outline w-4/12 hover:bg-primary"> <img className="w-8 h-8 rounded-full" src={goggle} alt="" />  Goggle</button>
    <button onClick={handleFacebookLogin}  className="btn btn-outline hover:bg-primary w-4/12"> <FaFacebook className="w-8 h-8 text-primary hover:text-gray-50  "/>  Facebook</button>
  </div>
    );
};

export default SocialLogin;