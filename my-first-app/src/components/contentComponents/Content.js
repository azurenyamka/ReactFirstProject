import ContentSection from './contentSection';
import './content.css';
import Navbar from "./Navbar";
const Content = () => {
    return (
        <div className='Content'>
            <Navbar/>
            <ContentSection/>
        </div>
    );
};
export default Content;