import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
// import { useContext } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    // const { user, logOut } = useContext(AuthContext);
    const { user, logOut } = useAuth();

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/services'>Services</Link></li>
        {
            user && <li><Link to='/bookings'>My Booking</Link></li>
        }
        <li><Link to='/contact'>Contact</Link></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100 h-24 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <img className='w-full h-full' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <button onClick={handleLogOut} className='bg-[#FF3811] text-white py-2.5 rounded-lg mr-3 px-3 font-bold '>LogOut</button>
                        : <Link to='/login' className='bg-[#FF3811] text-white py-2.5 rounded-lg mr-3 px-3 font-bold '>LogIn</Link>
                }
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;