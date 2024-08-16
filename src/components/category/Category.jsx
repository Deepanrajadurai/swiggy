import "./category.scss"
import img1 from "../../img/category/img1.avif"
import img2 from "../../img/category/img2.avif"
import img3 from "../../img/category/img3.avif"
import img4 from "../../img/category/img4.avif"
import img5 from "../../img/category/img5.avif"
import img6 from "../../img/category/img6.avif"
import img7 from "../../img/category/img7.avif"
import img8 from "../../img/category/img8.avif"
import { MdOutlineArrowForward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";

export default function Category() {
    return (
        <div className="category">
            <div className="top">
                <h2>What's on your mind?</h2>
                <div className='right'>
                    <MdOutlineArrowBack className="icons" />
                    <MdOutlineArrowForward className="icons"/>
                </div>
            </div>

            <div className='bottom'>
                <img className='imgs' src={img1} alt="img1" />
                <img className='imgs' src={img2} alt="img2" />
                <img className='imgs' src={img3} alt="img3" />
                <img className='imgs' src={img4} alt="img4" />
                <img className='imgs' src={img5} alt="img5" />
                <img className='imgs' src={img6} alt="img6" />
                <img className='imgs' src={img7} alt="img7" />
                <img className='imgs' src={img8} alt="img8" />
            </div>
        </div>
    )
}

