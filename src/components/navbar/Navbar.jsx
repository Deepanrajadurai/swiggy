import "./navbar.scss"
import logo from "../../img/logo.png"
import { FaAngleDown } from "react-icons/fa6";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdTv } from "react-icons/io";
import { BsCardList } from "react-icons/bs";
import { IoBodyOutline } from "react-icons/io5";
function Navbar() {
    return (
        <div className="navbar">
            <nav className='navbar'>
                <div className="left">
                    <img src={logo} alt='Logo image' />
                    <div className="address">
                        <p className='p'>Others</p>
                        <p>Coimbatore,Tamil Nadu, India</p>
                        <FaAngleDown color='rgb(250, 133, 0)' />
                    </div>
                </div>
                <div className="right">
                    <span> <IoMdTv className='icon' /> Swiggy Corporate </span>
                    <span><IoSearchOutline className='icon' /> Search </span>
                    <span><BiSolidOffer className='icon' />Offers </span>
                    <span><IoHelpBuoyOutline className='icon' />Helep </span>
                    <span><IoBodyOutline className='icon' />Sign In </span>
                    <span><BsCardList className='icon' />Card </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;