import { useEffect, useState } from "react";
import PopularCollagesCard from "../../Components/PopularCollagesCard";
import { Form } from "react-router-dom";



const PopularColleges = () => {
    const [popularColleges, setPopularColleges] = useState([])

    useEffect(() => {
        fetch('https://college-booking-server-chi.vercel.app/PopularColleges')
            .then(res => res.json())
            .then(data => {
                setPopularColleges(data)
                console.log(data);
            })
    }, [])

    const handleShortByName = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const options = { method: 'GET' };

        fetch(`https://college-booking-server-chi.vercel.app/AllCollege/${name}`, options)
            .then(response => response.json())
            .then(response => setPopularColleges(response))
            .catch(err => console.error(err));
        form.reset()

    }



    return (
        <div>
            <h2 className='text-3xl text-center mt-10  font-semibold underline'> Popular Colleges </h2 >
            <Form onSubmit={handleShortByName} className="my-6 text-center relative">
                <h1 >Search By Collage Name</h1>
                <input type="text" name='name' placeholder=" Type Animal name" className="input mt-2 input-bordered input-sm w-full max-w-xs rounded-full" required />
                <button className='btn btn-sm btn-primary  md:rounded-r-full static md:absolute left-[713px] bottom-0'>Search</button>
            </Form>
            <div className="grid lg:grid-cols-2 gap-6">
                {
                    popularColleges.map(popularCollage => <PopularCollagesCard key={popularCollage._id} popularCollage={popularCollage}></PopularCollagesCard>)
                }
            </div>
        </div>
    );
};

export default PopularColleges;