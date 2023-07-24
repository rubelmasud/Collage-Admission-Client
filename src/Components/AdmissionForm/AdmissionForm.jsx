import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvaider";

const Image_hosting_token = import.meta.env.VITE_IMGBB_KEY

const AdmissionForm = ({ selectedCollege }) => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const { image, name, researchHistory, sports, events } = selectedCollege || {}

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data?.photo[0])
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                const studentInfo = { StudentName: data.student_name, StudentEmail: data.email, Phone: data.phone, Subject: data.subject, BirthDay: data.date_of_birth, Address: data.address, Student_photo: imageRes.data.display_url, College_name: data.college_name, CollageImg: data.college_image, History: data.researchHistory, Sports: data.sports, Events: data.events }

                fetch('http://localhost:5000/admissions', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(studentInfo)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        if (result.acknowledged) {
                            reset()
                            toast.success('Admission is SuccessFully Done ...')
                        }
                    })

            })
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className=" ">
                <input
                    type="text"
                    className="admission-input "
                    placeholder="Your Name"
                    {...register("student_name")}
                    required
                />
                <input
                    type="email"
                    value={user?.email}
                    className="admission-input"
                    placeholder="Your Email"
                    {...register("email")}
                    required
                />
                <input
                    type="number"
                    className="admission-input"
                    placeholder="Your Phone"
                    {...register("phone")}
                    required
                />
                <input
                    type="text"
                    className="admission-input"
                    placeholder="Your Subject"
                    {...register("subject")}
                    required
                />
                <input
                    type="text"
                    className="admission-input"
                    placeholder="Your Address"
                    {...register("address")}
                    required
                />
                <input
                    type="date"
                    className="admission-input"
                    placeholder="Your date of birth"
                    {...register("date_of_birth")}
                    required
                />

                <input type="file" className=" admission-input" placeholder=" photoUrl" {...register("photo")} required />

                {/* college info input field */}
                <input
                    value={image}
                    className="admission-input"
                    {...register("college_image")}
                    required
                />
                <input
                    value={name}
                    className="admission-input"
                    {...register("college_name")}
                    required
                />
                <input
                    value={researchHistory}
                    className="admission-input"
                    {...register("researchHistory")}
                    required
                />
                <input
                    value={sports}
                    className="admission-input"
                    {...register("sports")}
                    required
                />
                <input
                    value={events}
                    className="admission-input"
                    {...register("events")}
                    required
                />


                <div className="w-10/12 mx-auto text-end">
                    <button className="btn  btn-active btn-primary btn-sm" type="primary">Submit</button>
                </div>
            </form>

        </div>
    );
};

export default AdmissionForm;