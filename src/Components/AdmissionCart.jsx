

const AdmissionCart = ({ my_college }) => {
    console.log(my_college);
    const { Address, BirthDay, CollageImg, College_name, Events, History, Phone, Sports, StudentEmail, StudentName, Student_photo, Subject } = my_college || {}
    return (
        <div className="card lg:card-side bg-blue-50 shadow-xl mx-4">
            <figure><img className='md:w-72 h-full' src={CollageImg} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="font-semibold">{College_name}</h2>
                <p className="text-sm">{History}</p>
                <span className="flex">
                    <small> <span className="font-bold">Events</span>: <br />{Events}</small>
                    <small> <span className="font-bold">Sports</span>:<br /> {Sports}</small>
                </span>
                <hr />
                <div className="flex gap-12 items-center">
                    <h3 className="font-semibold"> My Info</h3>
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={Student_photo} />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 font-bold">
                    <small>{StudentName}</small>
                    <small>{StudentEmail}</small>
                    <small>{Phone}</small>
                </div>
                <div className="flex gap-2 font-bold">
                    <small>{Address}</small>
                    <small>{BirthDay}</small>
                    <small>{Subject}</small>
                </div>
            </div>
        </div>
    );
};

export default AdmissionCart;