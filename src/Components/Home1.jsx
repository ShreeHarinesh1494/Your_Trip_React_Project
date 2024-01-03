import '../Assests/css/Home1.css'
import img1 from '../Assests/images/back1.jpg'
import HomeFooter from './Footer'
import { Link } from 'react-router-dom'
import Content from './Content'
const Home1=()=>
{
    return(
        <div className='hi'>
        <div className="body">
        <nav class="navbar">
        <div class="left-corner"></div>
        <div class="nav-options">
            <h1>Home</h1>
        <Link to="/Home1"><i class="fa fa-home"></i></Link>
        <Link to="/Trips"><i class="fas fa-suitcase"></i></Link>
        <Link to="/Contact"><i class="fas fa-phone"></i></Link>
        <Link to="/Home"><i class="fa fa-dashboard"></i></Link>
        <Link to="/"><i class="fa fa-sign-out"></i></Link>
        </div>
    </nav>
    <div class="image-container">
        <img src={img1}/>
        <div class="image-text">
            <h1>Hello TamilNadu</h1>
            <h3>Journey Never Ends here</h3>
        </div>
    </div>
        </div>
        <Content/>
        <br></br>
        <HomeFooter/>
        </div>
    )
}
export default Home1