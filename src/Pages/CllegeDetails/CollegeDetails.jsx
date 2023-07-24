import { useLoaderData } from "react-router-dom";


const CollegeDetails = () => {
    const details = useLoaderData();
    // console.log(details);
    const { admissionDate, image, name, researchHistory, sports, events } = details || {};


    return (
        <div className="rounded-lg overflow-hidden shadow-xl bg-blue-50 mx-4 text-center" >
            <div>
                <img src={image} alt="IJK Institute" className="w-full h-96 object-cover shadow-md" />
                <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                    <p className="text-gray-500 text-sm mb-4">Admission Date: {admissionDate}</p>


                    <div className="flex justify-center justify-evenly">
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Events:</h4>
                            <ul className="list-disc pl-6 mb-4">
                                {events.map((event, index) => (
                                    <li key={index}>{event}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="text-lg font-semibold mb-2">Sports:</h4>
                            <ul className="list-disc pl-6">
                                {sports.map((sport, index) => (
                                    <li key={index}>{sport}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Research History:</h4>
                    <p className="text-gray-700 mb-4">{researchHistory}</p>
                </div>
            </div>

        </div>
    );
};

export default CollegeDetails;
