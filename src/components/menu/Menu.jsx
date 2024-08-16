import "./menu.scss"
import { FcRating } from "react-icons/fc";
import menuimg1 from "../../img/menu/menu1.avif"
import menuimg2 from "../../img/menu/menu2.avif"
import menuimg3 from "../../img/menu/menu3.avif"
import menuimg4 from "../../img/menu/menu4.avif"
import menuimg5 from "../../img/menu/menu5.avif"
import menuimg6 from "../../img/menu/menu6.avif"
import menuimg7 from "../../img/menu/menu7.avif"
import menuimg8 from "../../img/menu/menu8.avif"

const Menu = () => {

    const menu = [
        {
            image: menuimg1,
            name: "Nagarkovil Arya Bhavan",
            rating: "4.6 . 20-30 mins",
            reagion: "South Indian , Chines",
            location: "Peelamedu"
        },
        {
            image: menuimg2,
            name: "Geetha Canteen",
            rating: "4.6 . 20-30 mins",
            reagion: "South Indian , Chines",
            location: "Peelamedu"
        },
        {
            image: menuimg3,
            name: "Nagarkovil Arya Bhavan",
            rating: "4.6 . 20-30 mins",
            reagion: "South Indian , Chines",
            location: "Peelamedu"
        },
        {
            image: menuimg4,
            name: "Nagarkovil Arya Bhavan",
            rating: "4.6 . 20-30 mins",
            reagion: "South Indian , Chines",
            location: "Peelamedu"
        },
        {
            image: menuimg5,
            name: "Nagarkovil Arya Bhavan",
            rating: "4.6 . 20-30 mins",
            reagion: "South Indian , Chines",
            location: "Peelamedu"
        },
        {
            image: menuimg6,
            name: "Nagarkovil Arya Bhavan",
            rating: "4.6 . 20-30 mins",
            reagion: "South Indian , Chines",
            location: "Peelamedu"
        },
        {
            image: menuimg7,
            name: "Nagarkovil Arya Bhavan",
            rating: "4.6 . 20-30 mins",
            reagion: "South Indian , Chines",
            location: "Peelamedu"
        },
        {
            image: menuimg8,
            name: "Nagarkovil Arya Bhavan",
            rating: "4.6 . 20-30 mins",
            reagion: "South Indian , Chines",
            location: "Peelamedu"
        },
    ]
    return (
        <div className="Menu">
            <div className="top">
                <h2>Restaurants with online food delivery in Coimbatore</h2>
            </div>
            <div className="span">
                <span className="spans">Filter</span>
                <span  className="spans">Sort By</span>
                <span  className="spans">Fast Delivery</span>
                <span className="spans">New On Swiggy</span>
                <span className="spans">Rating 4+</span>
                <span className="spans">Pure Veg</span>
                <span className="spans">Offers</span>
                <span className="spans">Rs.300-Rs. 600</span>
                <span className="spans">Less Then Rs. 300</span>
            </div>
            <div className="bottom">
                {menu.map((data, index) => (
                    <div className="card">
                        <img className="img" src={data.image} alt=' img1' />
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

export default Menu