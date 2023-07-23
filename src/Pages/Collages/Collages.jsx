import { useEffect, useState } from "react";
import CollegeCart from "../../Components/CollegeCart";

const Collages = () => {

    const [collages, setColleges] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setColleges(result)
            })
    }, [])
    return (
        <>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  pt-10">
                {
                    collages.map(college =>
                        <CollegeCart
                            key={college._id}
                            college={college}
                        ></CollegeCart>)
                }
            </div>
        </>
    );
};

export default Collages;