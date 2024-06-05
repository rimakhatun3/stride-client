import { Link } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";

import logo from "../../assets/logo.jpeg"
import { FaUser,FaSearch } from "react-icons/fa"
import ActiveLink from "../../Components/ActiveLink";
const Navbar = () => {

  const {user,logOut} = UseAuth()

const navItem =<>
<li className="text-black font-semibold"><ActiveLink to='/'>Home</ActiveLink></li>
<li className="text-black font-semibold"><ActiveLink to='/about'>About</ActiveLink></li>
<li className="text-black font-semibold"><ActiveLink to='/contact'>Contact</ActiveLink></li>
<li className="text-black font-semibold"><ActiveLink to='/blog'>Blog</ActiveLink></li>
<li className="text-black font-semibold "><ActiveLink to='dashboard'>Dashboard</ActiveLink></li>

</>

const handleLogOut =()=>{
  logOut()
  .then(()=>{})
  .catch(error=>{
    console.log(error.message)
  })
}

    return (
        <>
        <div className="flex  lg:flex:row  gap-8 items-center justify-center mt-5 ">
        <div className="flex gap-3 items-center justify-start" >
        <img className="w-16 h-16  " src={logo} alt="" />
        <Link><h1  className="text-3xl font-extrabold ">Electro </h1></Link>
        </div>
         

          <div className="flex lg:flex-row   justify-center items-center w-8/12 ">
            <select className="h-14 px-4 rounded-s-md border-primary border ">
            <option  >ALL</option>
  <option >Refrigarator</option>
  <option>Mobile</option>
  <option>Laptop</option>
  <option>Oven</option>
  <option>Television</option>
  <option>Home Appliance</option>
            </select>
            <div className="w-8/12">
              <input className="relative border border-primary px-10 py-4 w-full " type="text" name="" placeholder="Search" id="" />
              <FaSearch className="absolute top-11 mx-4  "></FaSearch>
            </div>
            <button className=" bg-primary py-4 text-white hover:bg-purple-400  px-12 rounded-e-lg text-center">Search</button>
          </div>

          <div>
          {
  user?<>
  <div className="flex justify-center items-center gap-2">
  <button onClick={handleLogOut} className="btn btn-sm btn-outline border-primary mx-2">LogOut</button>
  <div className="tooltip" data-tip={user?.displayName}>
  <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
</div> 
    </div> 
  </>
  
  :<>
  <div className="flex justify-center items-center gap-4 mx-8">
  <Link to='/register'><div className="tooltip" data-tip="Register Now">
 <FaUser className="w-8 h-8"/>
</div></Link>
  <Link to='/login'><button className="btn btn-sm btn-outline border-primary">Login</button></Link>
  </div>
    
  </>
}
          </div>
          
        </div>
        <div className="navbar bg-stone-50  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navItem}
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end me-28">
{/* {
  user?<>
  <button onClick={handleLogOut} className="btn btn-sm mx-2">LogOut</button>
<img className="w-10 rounded-full" src={user?.photoURL} alt="" />
    
  </>
  
  :<>
  <Link to='/login'><button className="btn btn-sm mx-3">Login</button></Link>
    <Link to='/register'><button className="btn btn-sm">Register</button></Link>
  </>
} */}

    
  </div>
</div>
        
        </>
    );
};

export default Navbar;