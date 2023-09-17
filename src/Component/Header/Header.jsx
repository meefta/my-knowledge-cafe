import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center mx-4 p-4 border-b-2 border-gray-500'>
            <h1 className='text-6xl'>Knowledge Cafe</h1>
            <img src={profile}></img>
        </div>
    );
};

export default Header;