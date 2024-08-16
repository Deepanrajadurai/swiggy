import "./toprestaurants.scss"
import { MdOutlineArrowForward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import topimg1 from "../../img/toprestaurant/img1.avif"
import topimg2 from "../../img/toprestaurant/img2.avif"
import topimg3 from "../../img/toprestaurant/img3.avif"
import topimg4 from "../../img/toprestaurant/img4.avif"
const TopRestaurants = () => {

    const restaurants = [
        {
            image: topimg1,
            name: "Nagarkovil Arya Bhavan",
            rating: "4.6 . 20-30 mins",
            reagion: "South Indian , Chines",
            location: "Peelamedu"
        },
        {
            image: topimg2,
            name: "Geetha Canteen",
            rating: "4.6 . 20-30 mins",
            reagion: "South Indian , Chines",
            location: "Peelamedu"
        },
        {
            image: topimg3,
            name: "Nagarkovil Arya Bhavan",
            rating: "4.6 . 20-30 mins",
            reagion: "South Indian , Chines",
            location: "Peelamedu"
        },
        {
            image: topimg4,
            name: "Nagarkovil Arya Bhavan",
            rating: "4.6 . 20-30 mins",
            reagion: "South Indian , Chines",
            location: "Peelamedu"
        },
    ]
    return (
        <div className="TopRestaurants">
            <div className="top">
                <h2>Top restaurant chains in Coimbatore</h2>
                <div className='right'>
                    <MdOutlineArrowBack className="icons" />
                    <MdOutlineArrowForward className="icons" />
                </div>
            </div>
            <div className="bottom">
                {restaurants.map((data, index) => (
                    <div className="card">
                        <img src={data.image} alt=' img1' />
                        <div className="content">
                            <h3>{data.name}</h3>
                            <span><FcRating className="icon" />{data.rating}</span>
                            <p className='onep'>{data.reagion}</p>
                            <p className='onep2'>{data.location}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TopRestaurants