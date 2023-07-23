
const ImagesGallery = () => {


    return (
        <div className="container mx-auto py-2 lg:pt-10  ">
            <h2 className='text-3xl text-center mb-10  font-semibold underline'>Colleges Photo Gallery !</h2>

            <div className=" mx-auto flex flex-wrap md:m-2">
                <div className="flex md:w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2 " data-aos="zoom-in-down">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center "
                            src="https://www.timeshighereducation.com/sites/default/files/university_of_british_columbia_0.jpg" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2" data-aos="zoom-in-down">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center "
                            src="https://www.timeshighereducation.com/sites/default/files/queens_university.jpg" />
                    </div>
                    <div className="w-full p-1 md:p-2" data-aos="zoom-in-right">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://weare.guru/wp-content/uploads/2016/07/1MIT.jpg" />
                    </div>
                </div>
                <div className="flex md:w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2" data-aos="zoom-in-left">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://weare.guru/wp-content/uploads/2016/07/5Oxford.jpg" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2" data-aos="zoom-out-left">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center "
                            src="https://weare.guru/wp-content/uploads/2016/07/7Yale.jpg" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2" data-aos="zoom-out-left">
                        <img
                            alt="gallery"
                            className="block h-96 w-full rounded-lg object-cover object-center "
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSheQbCuZb3ctTj0cVvUh9-zvM-x3OHVlD47g&usqp=CAU" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ImagesGallery;