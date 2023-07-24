import { useContext, useEffect, useState } from "react";
import AdmissionCart from "../../Components/AdmissionCart";
import { AuthContext } from "../../Providers/AuthProvaider";


const My_Collage = () => {
    const { user } = useContext(AuthContext)
    const [myColleges, setMyColleges] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/my_admissions/${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setMyColleges(result);
            })
    }, []);
    console.log(myColleges);
    return (
        <div className="grid md:grid-cols-2  gap-6  py-10">
            {
                myColleges?.map(my_college => <AdmissionCart
                    key={my_college._id}
                    my_college={my_college}
                ></AdmissionCart>)
            }
        </div>
    );
};

export default My_Collage;