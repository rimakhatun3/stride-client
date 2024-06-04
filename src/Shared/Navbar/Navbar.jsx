import { Link } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";


const Navbar = () => {

  const {user,logOut} = UseAuth()

const navItem =<>
<li><Link to='/'>Home</Link></li>
<li><Link to='/about'>About</Link></li>
<li><Link to='/contact'>Contact</Link></li>
<li><Link to='/blog'>Blog</Link></li>
<li><Link to='dashboard'>Dashboard</Link></li>

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
        <div className="navbar bg-base-100  mt-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navItem}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end">
{
  user?<>
  <button onClick={handleLogOut} className="btn btn-sm mx-2">LogOut</button>
<img className="w-10 rounded-full" src={user?.photoURL} alt="" />
    
  </>
  
  :<>
  <Link to='/login'><button className="btn btn-sm mx-3">Login</button></Link>
    <Link to='/register'><button className="btn btn-sm">Register</button></Link>
  </>
}

    
  </div>
</div>
        
        </>
    );
};

export default Navbar;