import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../assets/Images/banner-1.avif'
import banner2 from '../../assets/Images/banner-2.avif'
import banner3 from '../../assets/Images/banner-3.avif'
import banner4 from '../../assets/Images/banner-4.avif'

const Banner = () => {
    return (

        <Carousel className=" text-center">
            <div>
                <img src={banner1} />
                <div className="banner-content md:text-left  absolute right-20 top-[30%] bg-gradient-to-l from-indigo-100 md:p-12 rounded-md shadow-xl">
                    <h1 className="md:text-4xl font-bold">Welcome to <span className="text-red-500">EduBookings</span></h1>
                    <p className="md:text-neutral-500 text-black md:my-4">Unlock Your Potential, Embrace Your Future</p>
                    <button className="btn btn-outline btn-sm">Apply Now</button>
                </div>
            </div>
            <div>
                <img src={banner2} />
                <div className="banner-content md:text-left  absolute right-20 top-[30%] bg-gradient-to-l from-indigo-100 md:p-12 rounded-md shadow-xl">
                    <h1 className="md:text-4xl font-bold">Welcome to <span className="text-red-500">EduBookings</span></h1>
                    <p className="md:text-neutral-500 text-black md:my-4">Unlock Your Potential, Embrace Your Future</p>
                    <button className="btn btn-outline btn-sm">Apply Now</button>
                </div>
            </div>
            <div>
                <img src={banner3} />
                <div className="banner-content md:text-left  absolute right-20 top-[30%] bg-gradient-to-l from-indigo-100 md:p-12 rounded-md shadow-xl">
                    <h1 className="md:text-4xl font-bold">Welcome to <span className="text-red-500">EduBookings</span></h1>
                    <p className="md:text-neutral-500 text-black md:my-4">Unlock Your Potential, Embrace Your Future</p>
                    <button className="btn btn-outline btn-sm">Apply Now</button>
                </div>
            </div>
            <div>
                <img src={banner4} />
                <div className="banner-content md:text-left  absolute right-20 top-[30%] bg-gradient-to-l from-indigo-100 md:p-12 rounded-md shadow-xl">
                    <h1 className="md:text-4xl font-bold">Welcome to <span className="text-red-500">EduBookings</span></h1>
                    <p className="md:text-neutral-500 text-black md:my-4">Unlock Your Potential, Embrace Your Future</p>
                    <button className="btn btn-outline btn-sm">Apply Now</button>
                </div>
            </div>
        </Carousel>

    );
};

export default Banner;