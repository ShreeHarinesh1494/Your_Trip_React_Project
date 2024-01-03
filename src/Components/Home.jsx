import '../Assests/css/Home.css'
import vid1 from '../Assests/images/tamilnadu.mp4'
import { Link } from 'react-router-dom';
import '../Assests/css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
const Home=()=>
{
    return(
        <>
 <nav className="navbar">
        <div className="left-corner">
        </div>
        <div className="navs-options">
            <h1>YourTrip</h1>
            <Link to="/Home1">

                <i className="fa fa-home"></i>
            </Link>
            <Link to="/Trips">
                <i className="fas fa-suitcase"></i>
            </Link>
        </div>
    </nav>

    <div class="left-panel">
        <Link to="/Home">
            <i class="fa fa-home"></i> Home
        </Link>
        
        <Link to="/">
            <i class="fa fa-sign-out-alt"></i> Logout
        </Link>
        <Link to="/About">
            <i class="fa fa-info-circle"></i> About Us
        </Link>            
    </div>
    <div className="vid">

    <video className='vd' autoPlay loop muted >
            <source src={vid1} type="video/mp4"/>
    </video>

    </div>
    
    
        </>
    )
}

export default Home