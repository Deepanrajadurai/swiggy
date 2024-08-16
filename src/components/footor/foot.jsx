import "./footor.scss"
import logo from "../../img/logo.png"

function Footors() {
    return (

        <footor className='foot'>

            <div className="first">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <span> Swiggy </span>
                </div>
                <h3> @2024 Bundl Technologies Pvt. Ltd</h3>

            </div>

            <div className="card">
                <h4 className="h4">Company</h4>

                <a href="" className="a"> Home </a>
                <a href="" className="a">About</a>
                <a href="" className="a"> Team </a>
                <a href="" className="a"> Swiggy One</a>
                <a href="" className="a"> Swiggy Instamart </a>
                <a href="" className="a"> Swiggy Genie </a>


            </div>


            <div className="card">
                <h4 className="h4">Contact Us</h4>
                <a href="" className="a"> Help & Support  </a>
                <a href="" className="a"> Partner With Us  </a>
                <a href="" className="a">  Ride With us</a>

            </div>


            <div className="card">
                <h4 className="h4">Lecal</h4>
                <a href="" className="a"> Terms & Conditions </a>
                <a href="" className="a"> Cookies Policy  </a>
                <a href="" className="a"> Privacy Policy </a>
                <a href="" className="a">  Investor</a>

            </div>

            <div className="card">
                <h4 className="h4">We delivery to</h4>
                <a href="" className="a"> Dheli </a>
                <a href="" className="a"> Chennai</a>
                <a href="" className="a"> Bangaluru </a>
                <a href="" className="a">  Mumbai</a>
                <a href="" className="a"> Pune </a>

            </div>
        </footor>


    )
}
export default Footors;