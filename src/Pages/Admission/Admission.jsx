import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdmissionForm from "../../Components/AdmissionForm/AdmissionForm";

const Admission = () => {
    const [colleges, setColleges] = useState([]);
    const [selectedCollege, setSelectedCollege] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(result => {
                setColleges(result);
            })
    }, []);

    const handleCollegeClick = (college) => {
        setSelectedCollege(college);
    };

    return (
        <div className="pt-10">
            {/* Render the list of colleges */}
            {colleges.map(college => (
                <div key={college._id} className="bg-white rounded-lg shadow-md p-4 my-2">
                    <Link onClick={() => handleCollegeClick(college)} className="text-blue-600 hover:text-blue-800">
                        <h3 className="text-xl font-semibold">{college.name}</h3>
                    </Link>
                </div>
            ))}

            {/* Render the modal when a college is selected */}
            {selectedCollege && (
                <div className="fixed  inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-base-200 p-4 w-8/12 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{selectedCollege.name}</h3>
                        <p className="text-gray-500 text-sm mb-4">Admission Date: {selectedCollege.admissionDate}</p>
                        <AdmissionForm selectedCollege={selectedCollege} />
                        <button
                            onClick={() => setSelectedCollege(null)}
                            className="mt-4 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-800 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admission;
