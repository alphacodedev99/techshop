import { useState } from "react"
// components
import HeaderComponent from "./HeaderComponent";
import CategoryComponent from './CategoryComponent';
// images
import logo from '../assets/logo.png';
// icons
import { CiUser,CiHeart,CiShoppingCart } from "react-icons/ci";

function NavbarComponent() {
    const [toggleHeader, setToggleHeader] = useState(true);

  return (
    <div >
        {/* ??? PROSTIJE???? */}
        {toggleHeader && <HeaderComponent setToggleHeader={setToggleHeader} />}
        {/* Main Navbar */}
        <div className="bg-mainBlue h-full py-[10px] lg:h-[100px]">
            <div className="container mx-auto flex items-center justify-between h-full flex-col lg:flex-row gap-[15px]">
              <img src={logo} alt="logo" />

              {/* Search Component */}
              <div className="bg-whiteColor rounded-[20px]">
                <input type="text" placeholder="Search any things" className="px-[27px] py-[17px] outline-none rounded-[20px] placeholder:text-textColor" />
                <button className="bg-mainYellow text-whiteColor px-[27px] py-[17px] rounded-[20px]">Search</button>
              </div>

              {/* Login/Cart/Favorite */}
              <div className="flex items-center gap-[15px]">
                <div className="flex items-center">
                    <CiUser size={28} color="white"/>
                    <span className="text-whiteColor">Login</span>
                </div>
                <div className="flex items-center gap-[5px]">
                    <CiHeart size={28} color="white"/>
                    <span className="bg-mainYellow rounded-full text-whiteColor w-[20px] h-[20px] flex items-center justify-center">0</span>
                    <span className="text-whiteColor">Favorite</span>
                </div>
                <div className="flex items-center gap-[5px]">
                    <CiShoppingCart size={28} color="white"/>
                    <span className="bg-mainYellow rounded-full text-whiteColor w-[20px] h-[20px] flex items-center justify-center">0</span>
                    <span className="text-whiteColor">Cart</span>
                </div>
              </div>
            </div>
        </div>

        {/* Category Component */}
        <CategoryComponent />
    </div>
  )
}

export default NavbarComponent