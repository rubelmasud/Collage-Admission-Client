import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PopularCollagesCard = ({ popularCollage }) => {
    const { admissionDate, image, name, researchHistory, _id } = popularCollage || {};


    return (
        <div className="rounded-lg overflow-hidden shadow-xl bg-blue-50 mx-4 cursor-pointer" >
            <div>
                <img src={image} alt="IJK Institute" className="w-full h-48 object-cover shadow-md" />
                <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{name}</h3>
                    <p className="text-gray-500 text-sm mb-4">Admission Date: {admissionDate}</p>


                    <h4 className="text-lg font-semibold mb-2">Research History:</h4>
                    <p className="text-gray-700 mb-4">{researchHistory}</p>
                    <div className="text-end">
                        <Link to={`/details/${_id}`} className="btn btn-error hover:btn-outline text-white btn-sm animate-bounce">See More <BsArrowRightShort size={20} /></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopularCollagesCard;