import './App.css';



import { MdOutlineArrowForward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import { FcRating } from "react-icons/fc";

import Navbar from './components/navbar/Navbar';
import Category from './components/category/Category';
import TopRestaurants from './components/topres/TopRestaurants';
import Footors from './components/footor/foot' 
import Menu from './components/menu/Menu'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Category />
      <TopRestaurants />
      <Menu/>
      <Footors />
      
      
    </div>
  )
}

export default App;
