import { useState } from "react"
// components
import HeaderComponent from "./HeaderComponent";
import CategoryComponent from './CategoryComponent';
// images
import logo from '../assets/logo.png';
// icons
import { CiUser,CiHeart,CiShoppingCart } from "react-icons/ci";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavbarComponent() {
    const [toggleHeader, setToggleHeader] = useState(true);

    const {totalProduct} = useSelector((state) => state.cartStore);


    const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {
        right: -5,
        top: 8,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
    }));

  return (
    <div >
        {/* ??? PROSTIJE???? */}
        {toggleHeader && <HeaderComponent setToggleHeader={setToggleHeader} />}
        {/* Main Navbar */}
        <div className="bg-mainBlue h-full py-[10px] lg:h-[100px]">
            <div className="container mx-auto flex items-center justify-between h-full flex-col lg:flex-row gap-[15px]">
              <Link to={'/'}>
               <img src={logo} alt="logo" />
              </Link>

              {/* Search Component */}
              <div className="bg-whiteColor rounded-[20px]">
                <input type="text" placeholder="Search any things" className="px-[27px] py-[17px] outline-none rounded-[20px] placeholder:text-textColor" />
                <button className="bg-mainYellow text-whiteColor px-[27px] py-[17px] rounded-[20px]">Search</button>
              </div>

              {/* Login/Cart/Favorite */}
              <div className="flex items-center gap-[15px]">
                <div className="flex items-center">
                    <CiUser size={28} color="white"/>
                    {/* Da se ulogujes */}
                    <SignedOut>
                      <SignInButton />
                    </SignedOut>
                    {/* Kad se ulogujes */}
                    <SignedIn>
                      <UserButton showName/>
                    </SignedIn>
                </div>
                <div className="flex items-center gap-[5px]">
                    <CiHeart size={28} color="white"/>
                    <span className="bg-mainYellow rounded-full text-whiteColor w-[20px] h-[20px] flex items-center justify-center">0</span>
                    <span className="text-whiteColor">Favorite</span>
                </div>
                <div className="flex items-center gap-[10px]">
                    
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={totalProduct} color="primary">
                        <ShoppingCartIcon color="white" className="text-whiteColor" />
                      </StyledBadge>
                    </IconButton>
                    <Link to={'/cart'} className="text-whiteColor">Cart</Link>
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