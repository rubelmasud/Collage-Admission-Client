import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvaider";
import { toast } from "react-toastify";

const Login = () => {
    const [show, setShow] = useState(false)
    const { register, handleSubmit } = useForm();
    const { SignInUser, } = useContext(AuthContext)

    const onSubmit = data => {
        SignInUser(data.email, data.password)
            .then((result) => {
                result.user;
                toast.success('User Log In Is Successfully !');
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <div className="md:h-screen grid md:grid-cols-2 justify-center items-center ">
            <div className="-mt-10 md:mt-4">
                <img src="https://i.ibb.co/YQ60QFB/flat-university-concept-23-2148184172.jpg" alt="flat-university-concept-23-2148184172" border="0" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-blue-50 shadow-lg rounded-lg mx-4 p-12">
                <input type="email" className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="Place give me your email " {...register("email")} required />


                <input type={show ? 'text' : 'password'} className="w-10/12 mx-auto h-12 rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="Place give me your Password " {...register("password")} required />

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


                <div className="flex pt-4 w-full mx-auto gap-3">
                    <small> Dont have an account ? </small>
                    <p className="text-orange-500 underline"><Link to='/signup'>Place Register</Link></p>
                </div>
            </form>

        </div>
    );
};

export default Login;