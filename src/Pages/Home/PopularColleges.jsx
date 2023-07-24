import { useEffect, useState } from "react";
import PopularCollagesCard from "../../Components/PopularCollagesCard";


const PopularColleges = () => {
    const [popularColleges, setPopularColleges] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/PopularColleges')
            .then(res => res.json())
            .then(data => {
                setPopularColleges(data)
                console.log(data);
            })
    }, [])


    return (
        <div>
            <h2 className='text-3xl text-center my-10  font-semibold underline'> Popular Colleges </h2 >
            <div className="grid lg:grid-cols-2 gap-6">
                {
                    popularColleges.map(popularCollage => <PopularCollagesCard key={popularCollage._id} popularCollage={popularCollage}></PopularCollagesCard>)
                }
            </div>
        </div>
    );
};

export default PopularColleges;