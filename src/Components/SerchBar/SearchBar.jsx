
const SearchBar = () => {

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target.elements.name.value);

    }

    return (
        <form onSubmit={handleSearch} className="">
            <input type="text" name='name' className='rounded-lg shadow-md border-none' />
            <input type="submit" value="Search" className='bg-blue-500 text-white  rounded-r-lg absolute top:[500px] right-[432px] px-2 font-bold' />
        </form>
    );
};

export default SearchBar;