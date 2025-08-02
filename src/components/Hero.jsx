const Hero = () => {
    return (
        <div className="mx-auto  p-6 max-w-[1640px] ">
            <div className="relative max-h-[500px]">
                <div className="absolute w-full h-full text-gray-200 max-h-[500px]  bg-black/40 flex flex-col justify-center ">
                    <h1 className="px-4 text-4xl md:6xl lg:text-7xl font-bold">The <span className="text-orange-600">Best</span></h1>
                    <h1 className="px-4 text-4xl md:6xl lg:text-7xl font-bold "> <span className="text-orange-600" >Foods </span>Delivered</h1>
                </div>
                <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/"
                    className="w-full max-h-[500px] object-cover" />
            </div>
      
        </div>





    );
}

export default Hero;