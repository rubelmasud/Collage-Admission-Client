
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../Providers/AuthProvaider";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        fetch(`https://college-booking-server-chi.vercel.app/UpdateUser/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCurrentUser(data)
                console.log(data);
            })
    }, [])

    const onSubmit = data => {
        console.log(data);
        fetch(`https://college-booking-server-chi.vercel.app/updatedUser/${user?.email}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    toast.success('User updated successfully done ...')
                    reset()
                }
            });
    };


    return (
        <form className=" bg-blue-50 md:w-4/12 mx-auto shadow-lg rounded-lg  pt-12 p-2" onSubmit={handleSubmit(onSubmit)}>


            <div className="flex w-10/12 mx-auto gap-4 items-center">
                <input type="text" defaultValue={currentUser.name} className=" h-12 w-8/12 rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder=" Your Name " {...register("name")} required />

                <input type="file" defaultValue={currentUser.image} className=" rounded-md shadow-lg my-4 px-2  border-l-2 border-r-2 border-orange-500" placeholder=" photoUrl" {...register("image")} required />
            </div>

            <input type="email" defaultValue={currentUser.email} className="w-10/12 mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="Place give me your email " {...register("email")} required />


            {/* <div className="flex w-10/12 mx-auto gap-4">

                <input type='password' defaultValue={currentUser.password} className="w-full mx-auto h-12  rounded-md shadow-lg my-4 block px-2  border-l-2 border-r-2 border-orange-500" placeholder="New Password " {...register("password",)} required />
            </div> */}
            <div className="w-10/12 mx-auto ">
                <button className="w-full bg-blue-600  h-10 block rounded-lg font-bold text-white" type="primary">Update</button>
            </div>

        </form>
    );
};

export default UpdateProfile;