import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Image_hosting_token = import.meta.env.VITE_IMGBB_KEY
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../Providers/AuthProvaider";
import { toast } from "react-toastify";

const SignUp = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const { createUser, updateUserProfile } = useContext(AuthContext)

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const password = watch('password', '');

    const validatePasswordMatch = (value) => {
        return value === password || 'Passwords do not match';
    };

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                console.log(imageRes);
                if (imageRes.success) {
                    const photoUrl = imageRes.data.display_url;

                    createUser(data.email, data.password)
                        .then((result) => {
                            const user = result.user;
                            console.log(user);
                            updateUserProfile(data.name, photoUrl)
                        }).then(() => {
                            const savedUser = { name: data.name, image: photoUrl, email: data.email }
                            fetch('https://y-rubelmasud.vercel.app/users/', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(savedUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        reset()
                                        toast.success('User Sign Up Is Successfully !');
                                        // navigate(from, { replace: true })
                                    }
                                })

                        })
                        .catch((error) => {
                            console.log(error);
                            setError(error.message)
                        })

                }
            })

    };


    return (
        <div className="w-full  grid md:grid-cols-2 justify-center items-center">
            <div className="-mt-10 md:mt-4">
                <img src="https://i.ibb.co/YQ60QFB/flat-university-concept-23-2148184172.jpg" alt="flat-university-concept-23-2148184172" border="0" />
            </div>
            <div className="mx-6 mb-4 border-b-4 border-t-2 border-orange-500 p- rounded-lg shadow-lg bg-blue-50">
                <p className="text-red-500 text-center mt-2">{error}</p>
                <form className="py-6" onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex w-10/12 mx-auto gap-4 items-center">
                        <input type="text" className=" h-12 w-8/12 rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder=" Your Name " {...register("name")} required />

                        <input type="file" className=" rounded-md shadow-lg my-4 px-2  border-l-2 border-r-2 border-orange-500" placeholder=" photoUrl" {...register("image")} required />
                    </div>

                    <input type="email" className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="Place give me your email " {...register("email")} required />


                    <div className="flex w-10/12 mx-auto gap-4">

                        <input type={show ? 'text' : 'password'} className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="New Password " {...register("password",
                            {
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[!@#$%^&*])(?=.*[A-Z])/
                            })} required />

                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 character !!</p>}

                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less then 20 character !!</p>}

                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must hand ! uppercase  and one special character !!</p>}

                        <input type={show ? 'text' : 'password'} className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="Confirm Password " {...register("confirmPassword", {
                            validate: validatePasswordMatch,
                        })} required />
                    </div>

                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

                    <div onClick={() => setShow(!show)} className="w-10/12 mx-auto flex items-center gap-2  mb-2">
                        {
                            show ? <>  <AiFillEyeInvisible className="text-orange-400" ></AiFillEyeInvisible>
                                <p>Hide password</p>
                            </> :
                                <>  <AiFillEye className="text-orange-400"></AiFillEye>
                                    <p>Show password</p>
                                </>
                        }
                    </div>

                    <div className="w-10/12 mx-auto ">
                        <button className="w-full bg-blue-600  h-10 block rounded-lg font-bold text-white" type="primary">Sign Up</button>
                    </div>

                    <div className="flex pt-4 w-10/12 mx-auto gap-3">
                        <small> Already have an account ? </small>
                        <p className="text-orange-500 underline"><Link to='/login'>Place Login</Link></p>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default SignUp;
