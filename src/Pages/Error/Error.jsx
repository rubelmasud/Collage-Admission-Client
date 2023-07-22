
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import ParticlesBg from 'particles-bg';


const ErrorPage = () => {

    return (
        <div className=" h-screen w-full bg-red-500">
            <ParticlesBg
                params={{
                    particles: {
                        number: {
                            value: 80
                        },
                        size: {
                            value: 4
                        }
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            }
                        }
                    }
                }}

            />
            <div className="absolute top-0  flex flex-col justify-center  w-full">
                <h1 className="text-5xl font-extrabold text-center pt-12  animate-pulse">Oh No !! Something Wrong </h1>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img className="mx-auto justify-center" src="https://i.ibb.co/H7WKjxq/man-holding-plug-404-error-page-found-page-1150-65047-removebg-preview.png" alt="" />
                </motion.div >
                <div className="text-center">
                    <Link to='/'>
                        <button className="btn bg-slate-700 font-bold text-white animate-pulse">Back to home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
