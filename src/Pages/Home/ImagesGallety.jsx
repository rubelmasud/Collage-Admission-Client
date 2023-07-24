
const ImagesGallery = () => {


    return (
        <div className="container mx-auto py-2 lg:pt-10  ">
            <h2 className='text-3xl text-center my-10  font-semibold underline'> Photos Gallery !</h2>

            <div className=" mx-auto flex flex-wrap md:m-2">
                <div className="flex md:w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2 " data-aos="zoom-in-down">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center "
                            src="https://img.freepik.com/free-photo/group-colleagues-with-diploma_23-2148522297.jpg?size=626&ext=jpg&ga=GA1.1.877771296.1684372824&semt=ais" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2" data-aos="zoom-in-down">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center "
                            src="https://img.freepik.com/premium-photo/happy-young-graduated-students-capes-with-diplomas-walking-garden-university_115086-257.jpg?size=626&ext=jpg&ga=GA1.1.877771296.1684372824&semt=ais" />
                    </div>
                    <div className="w-full p-1 md:p-2" data-aos="zoom-in-right">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://img.freepik.com/premium-photo/education-people-concept-group-standing-smiling-students-with-diploma-corner-cap_380164-58175.jpg?size=626&ext=jpg&ga=GA1.1.877771296.1684372824&semt=ais" />
                    </div>
                </div>
                <div className="flex md:w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2" data-aos="zoom-in-left">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201866.jpg?size=626&ext=jpg&ga=GA1.1.877771296.1684372824&semt=ais" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2" data-aos="zoom-out-left">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center "
                            src="https://img.freepik.com/free-photo/medium-shot-approving-teenage-friends_23-2148225379.jpg?size=626&ext=jpg&ga=GA1.1.877771296.1684372824&semt=ais" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2" data-aos="zoom-out-left">
                        <img
                            alt="gallery"
                            className="block h-96 w-full rounded-lg object-cover object-center "
                            src="https://img.freepik.com/free-photo/front-view-girls-holding-their-college-certificates_23-2148232748.jpg?size=626&ext=jpg&ga=GA1.1.877771296.1684372824&semt=ais" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ImagesGallery;