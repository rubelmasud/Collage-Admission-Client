import { useState } from "react";



const CollegeCart = ({ college }) => {
    const { admissionDate, image, name, researchHistory, sports, events } = college || {};
    const [isFullCardVisible, setIsFullCardVisible] = useState(false);

    const toggleFullCard = () => {
        setIsFullCardVisible(!isFullCardVisible);
    };

    return (
        <div className="rounded-lg overflow-hidden shadow-xl bg-blue-50 mx-4 cursor-pointer" onClick={toggleFullCard}>
            {isFullCardVisible ? (
                <div>
                    {/* Full Card Content */}
                    <img src={image} alt="IJK Institute" className="w-full h-48 object-cover shadow-md" />
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                        <p className="text-gray-500 text-sm mb-4">Admission Date: {admissionDate}</p>
                        <h4 className="text-lg font-semibold mb-2">Events:</h4>
                        <ul className="list-disc pl-6 mb-4">
                            {events.map((event, index) => (
                                <li key={index}>{event}</li>
                            ))}
                        </ul>
                        <h4 className="text-lg font-semibold mb-2">Research History:</h4>
                        <p className="text-gray-700 mb-4">{researchHistory}</p>
                        <h4 className="text-lg font-semibold mb-2">Sports:</h4>
                        <ul className="list-disc pl-6">
                            {sports.map((sport, index) => (
                                <li key={index}>{sport}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div>
                    {/* Summary Card */}
                    <img src={image} alt="IJK Institute" className="w-full h-48 object-cover shadow-md" />
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                        <p className="text-gray-500 text-sm mb-4">Admission Date: {admissionDate}</p>
                        <h4 className="text-lg font-semibold mb-2">Events:</h4>
                        <ul className="list-disc pl-6 mb-4">
                            {events.slice(0, 3).map((event, index) => (
                                <li key={index}>{event}</li>
                            ))}
                        </ul>
                        <button className="text-blue-500 font-semibold" onClick={toggleFullCard}>View Full Card</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CollegeCart;
