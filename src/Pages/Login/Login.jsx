import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvaider";
import { toast } from "react-toastify";
import GoogleLogin from "../../Shered/GoogleLogin";
import ParticlesBg from 'particles-bg';


const Login = () => {
    const [show, setShow] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const { SignInUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    // TODO reset password

    const onSubmit = data => {
        SignInUser(data.email, data.password)
            .then((result) => {
                result.user;
                toast.success('User Log In Is Successfully !');
                reset()
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
            })
    };


    return (
        <div className="w-full h-screen md:mt-20 bg-red-200">
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

            <form onSubmit={handleSubmit(onSubmit)} className=" absolute md:top-[20%] md:right-[35%] top-20 bg-transparent md:w-4/12 w-full mx-4 shadow-lg rounded-lg py-12 p-2">
                <input
                    type="email"
                    className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500"
                    placeholder="Place give me your email "
                    {...register("email")}
                    required
                />


                <input
                    type={show ? 'text' : 'password'}
                    className="w-10/12 mx-auto h-12 rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500"
                    placeholder="Place give me your Password "
                    {...register("password")} required />
                <small
                    className="text-red-400 ml-10 cursor-pointer">
                    Forget password
                </small>

                <div onClick={() => setShow(!show)} className="w-10/12 mx-auto flex items-center gap-2  mb-2">
                    {
                        show ? <>  <AiFillEyeInvisible className="text-orange-400" ></AiFillEyeInvisible>  <p>Hide password</p>  </> : <>   <AiFillEye className="text-orange-400"></AiFillEye>
                            <p>Show password</p>
                        </>
                    }
                </div>

                <div className="w-10/12 mx-auto ">
                    <button className="w-full bg-blue-600  h-10 block rounded-lg font-bold text-white" type="primary">Log In</button>
                </div>


                <div className="flex pt-4 w-full justify-center gap-3 text-center">
                    <small> Dont have an account ? </small>
                    <p className="text-white underline"><Link to='/signup'>Place Register</Link></p>
                </div>

                <div className="">
                    <GoogleLogin />
                </div>
            </form>

        </div>
    );
};

export default Login;