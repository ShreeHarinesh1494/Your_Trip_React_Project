import '../Assests/css/Aboutus.css'
import img1 from '../Assests/images/your-trip-high-resolution-logo.jpeg'
import { Link } from 'react-router-dom'
const Aboutus=()=>
{
    return(
        <>
        <nav class="navbar">
        <div class="left-corner">
        </div>
        <div class="navs-options">
            <h1>About Us</h1>
            <Link to="/Home1">

                <i className="fa fa-home"></i>
            </Link>
            <Link to="/Trips">
                <i className="fas fa-suitcase"></i>
            </Link>
        </div>
    </nav>

    <div class="left-pane">
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
    <div class="text">
        <div class="container">
            <div class="circle-img">
                <img src={img1} alt="YourTrip Image"/>
            </div>
        <h1>YourTrip</h1>
        <h2 style={{ color: 'orange' }}>Explore Tamil Nadu Like Never Before!</h2>
        <h3>Welcome to YourTrip, your ultimate travel companion for exploring the enchanting districts of Tamil Nadu! Embark on a journey of discovery, uncovering the rich cultural heritage, vibrant traditions, and breathtaking landscapes that make Tamil Nadu a truly remarkable destination.</h3>
        <h2 style={{ color: 'orange' }}>Our Mission</h2>
        <h3>At YourTrip, we are dedicated to making your travel experience seamless, informative, and unforgettable. Our mission is to be your go-to tour guidance application, providing insightful details and personalized recommendations to ensure you make the most of your visit to Tamil Nadu.</h3>
        <h2 style={{ color: 'orange' }}>Join Us in Unraveling Tamil Nadu</h2>
        <h3>YourTrip is not just an application; it's an invitation to embark on a journey of exploration, curiosity, and cultural immersion. Whether you're a history buff, a nature enthusiast, or a foodie seeking culinary delights, YourTrip is your gateway to unlocking the treasures of Tamil Nadu.</h3>
        </div>
    </div>
        </>
    )
}
export default Aboutus