import './header.css';
import Navbar from './Navbar';
import HeaderSection from './headerSection';
const Header = ()=>{
    return (
        <div className='header'>
        <Navbar/>
        <HeaderSection/>
        </div>
    );
   
};
export default Header;