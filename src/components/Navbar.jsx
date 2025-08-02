import React,{useState} from 'react'
import { AiOutlineMenu, AiOutlineSearch,AiOutlineClose,AiFillTag} from 'react-icons/ai'
import { BsFillCartFill,BsFillSaveFill} from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';



const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    
    return (
    
            <div className=' mx-auto  p-6 max-w-[1640px] flex justify-between items-center '>
            <div className="flex items-center  ">
                <div className='cursor-pointer'><AiOutlineMenu size={30} onClick={() => {
                    setOpen(!isOpen);
                }} className='cursor-pointer' />
                </div>
                 <h1 className='text-xl md:text-3xl lg:text-4xl px-2'>Best<span className='font-bold'> Eats</span></h1>
                <div className="hidden lg:flex items-center justify-center bg-gray-200 rounded-full p-1 text-sm">
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>
         
            <div className='bg-gray-200 rounded-full flex items-center  px-2 w-[230px] md:w-[400px] lg:w-[500px]  '>
                <AiOutlineSearch size={25}/>
                <input type="text" placeholder='Search foods' className='bg-transparent p-2 focus:outline-none'/>
            </div>
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'><BsFillCartFill size={20} className='mr-2' /> Cart</button>   
            
            {isOpen ? <div className="bg-black/70 fixed top-0 left-0 h-screen z-10 w-full"></div> :' '} 
            
            <div className={isOpen ?"fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300":"fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={()=>{setOpen(!isOpen)}} />
                <h2 className='text-2xl p-4'>Best<span className='font-bold'> Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='flex py-4 text-xl items-center gap-x-4'><TbTruckDelivery size={25} /> Orders</li>
                        <li className='flex py-4 text-xl items-center gap-x-4'><MdFavorite size={25} /> Favorites</li>
                        <li className='flex py-4 text-xl items-center gap-x-4'><FaWallet size={25} /> Wallet</li>
                        <li className='flex py-4 text-xl items-center gap-x-4'><MdHelp size={25} /> Help</li>
                        <li className='flex py-4 text-xl items-center gap-x-4'><AiFillTag size={25} /> Promotions</li>
                        <li className='flex py-4 text-xl items-center gap-x-4'>< BsFillSaveFill size={25} /> Best Ones</li>
                        <li className='flex py-4 text-xl items-center gap-x-4'><FaUserFriends size={25} /> Invite Friends</li>

                    </ul>
                </nav>

            </div>
            </div>
    
  )
}

export default Navbar