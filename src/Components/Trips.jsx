import '../Assests/css/Trips.css'
import { Link } from 'react-router-dom';
import img1 from '../Assests/images/coimbatore.jpg'
import img2 from '../Assests/images/madurai.jpg'
import img3 from '../Assests/images/ooty.jpg'
import img4 from '../Assests/images/kanyakumari.jpg'
import img5 from '../Assests/images/Ariyalur.jpg'
import img6 from '../Assests/images/chengalpattu.jpg'
import img7 from '../Assests/images/chennai.jpg'
import img8 from '../Assests/images/cuddalore.jpg'
import img9 from '../Assests/images/dharmapuri.jpg'
import img10 from '../Assests/images/Dindigul.jpg'
import img11 from '../Assests/images/erode.JPG'
import img12 from '../Assests/images/kalla.jpg'
import img13 from '../Assests/images/kanchipuram.jpg'
import img14 from '../Assests/images/Karur.jpg'
import img15 from '../Assests/images/krishnagiri.jpg'
import img16 from '../Assests/images/mayil.jpg'
import img17 from '../Assests/images/naga.jpg'
import img18 from '../Assests/images/Namakkal.jpg'
import img19 from '../Assests/images/peram.jpg'
import img20 from '../Assests/images/salem.jpg'
import HomeFooter from './Footer';
const Trips=()=>
{
    return(
        <>
         <nav class="navbar">
        <div class="left-corner"></div>
        <div class="nav-options">
            <h1>YourTrip</h1>
            <Link to="/Home1"><i class="fa fa-home"></i></Link>
        <Link to="/Trips"><i class="fas fa-suitcase"></i></Link>
        <Link to="/Contact"><i class="fas fa-phone"></i></Link>
        <Link to="/Home"><i class="fa fa-dashboard"></i></Link>
        <Link to="/"><i class="fa fa-sign-out"></i></Link>
        </div>
    </nav>
    {/* <div class="card-container">
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={img1} alt="Card 1" style={{ width: '100%', height: '100%' }}/>
                </div>
                <div class="flip-card-back">
                    <h1>Coimbatore</h1>
                    <p>Coimbatore is a city located in the state of Tamil Nadu, India. It is often referred to as the "Manchester of South India" due to its prominent position as a major industrial and textile hub</p>
                    <p><a href="#">Click Here</a></p>
                </div>
            </div>
        </div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={img2} alt="Card 2" style={{ width: '100%', height: '100%' }}/>
                </div>
                <div class="flip-card-back">
                    <h1>Madurai</h1>
                    <p>It holds great cultural, historical, and religious significance and is one of the oldest continuously inhabited cities in the world.</p>
                    <p><a href="#">Click Here</a></p>
                </div>
            </div>
        </div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={img3} alt="Card 3" style={{ width: '100%', height: '100%' }}/>
                </div>
                <div class="flip-card-back">
                    <h1>Ooty</h1>
                    <p>Ooty, officially known as Udhagamandalam, is a picturesque hill station located in the Nilgiri Hills of the Indian state of Tamil Nadu.</p>
                    <p><a href="#">Click Here</a></p>
                </div>
            </div>
        </div>
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={img4} alt="Card 4" style={{ width: '100%', height: '100%' }}/>
                </div>
                <div class="flip-card-back">
                    <h1>kanyakumari</h1>
                    <p> It is in the state of Tamil Nadu, India. Renowned for its spectacular geographical location, Kanyakumari is a popular tourist destination with a rich cultural.</p>
                    <p><a href="#">Click Here</a></p>
                </div>
            </div>
        </div>
    </div> */}
<div className="grid-container">
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img1} alt="Coimbatore" />
          <br />
          <h1>Coimbatore</h1>
        <h3>
      Coimbatore is a city located in the state of Tamil Nadu, India. It is often referred to as
      the "Manchester of South India" due to its prominent position as a major industrial and
      textile hub.
        </h3>
        <h2><Link className='link' to="/Coimbatore">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img2} alt="Madurai" />
          <br />
          <h1>Madurai</h1>
                    <h3>It holds great cultural, historical, and religious significance and is one of the oldest continuously inhabited cities in the world.</h3>
                    <h2><Link className='link' to="/Madurai">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img3} alt="Ooty" />
          <br />
          <h1>Nilgiris</h1>
                    <h3>Ooty, officially known as Udhagamandalam, is a picturesque hill station located in the Nilgiri Hills of the Indian state of Tamil Nadu.</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img4} alt="Kanyakumari" />
          <br />
          <h1>kanyakumari</h1>
                    <h3> It is in the state of Tamil Nadu, India. Renowned for its spectacular geographical location, Kanyakumari is a popular tourist destination with a rich cultural.</h3>
                    <h2><Link className='link' to="/Kanyakumari">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img5} alt="Kanyakumari" />
          <br />
          <h1>Ariyalur</h1>
                    <h3>Ariyalur is known for its rich agricultural landscape and historical significance, featuring ancient temples and archaeological sites that reflect the cultural heritage of the region.</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img6} alt="Kanyakumari" />
          <br />
          <h1>Chengalpattu</h1>
                    <h3>Chengalpattu, a city in Tamil Nadu, is renowned for its historical temples and as a key transportation hub with a significant railway junction, facilitating connectivity to Chennai and other parts of the state.</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img7} alt="Kanyakumari" />
          <br />
          <h1>Chennai</h1>
                    <h3>Chennai, the capital city of Tamil Nadu, is a vibrant metropolis known for its diverse culture, historic landmarks such as the Marina Beach, thriving IT industry, and a rich culinary scene featuring South Indian flavors.</h3>
                    <h2><Link className='link' to="/Chennai">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img8} alt="Kanyakumari" />
          <br />
          <h1>Cuddalore</h1>
                    <h3>Cuddalore, a coastal town in Tamil Nadu, India, is recognized for its historic forts, temples, and picturesque beaches. The town also plays a significant role in agriculture, with cultivation of crops like paddy and sugarcane contributing to its economy.</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img9} alt="Kanyakumari" />
          <br />
          <h1>Dharmapuri</h1>
                    <h3>Dharmapuri, Tamil Nadu, is characterized by its picturesque landscapes, agricultural prominence in mango and tamarind cultivation, and enriched cultural heritage with historical temples and forts.</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img10} alt="Kanyakumari" />
          <br />
          <h1>Dindigul</h1>
                    <h3>Dindigul, a city in Tamil Nadu, India, is famous for its historical rock fort, culinary delight "Dindigul Thalappakatti" biryani, and as a hub for agriculture, particularly in the production of crops like cotton, millet, and tobacco.</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img11} alt="Kanyakumari" />
          <br />
          <h1>Erode</h1>
                    <h3>Erode, located in Tamil Nadu, India, is renowned for its textile and turmeric industries. The city is a major trading center, hosts the famous Erode Turmeric Market, and is known for its cultural heritage and temples.</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img12} alt="Kanyakumari" />
          <br />
          <h1>Kallakurichi</h1>
                    <h3>Kallakurichi is a district in the Indian state of Tamil Nadu, created in 2019. It is known for its agricultural activities, encompassing cultivation of crops such as rice, sugarcane, and groundnuts, and features a blend of cultural and natural attractions.</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img13} alt="Kanyakumari" />
          <br />
          <h1>Kanchipuram</h1>
                    <h3>Kanchipuram, often referred to as the "City of Thousand Temples," is a historic city in Tamil Nadu, India. Renowned for its silk sarees, it holds cultural significance with numerous ancient temples, including Kanchi Kailasanathar Temple</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img14} alt="Kanyakumari" />
          <br />
          <h1>Karur</h1>
                    <h3>Karur, a town in Tamil Nadu, India, is celebrated for its flourishing textile and handloom industries, particularly known for producing high-quality cotton fabrics. The city is also historically significant, featuring ancient temples and monuments</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img15} alt="Kanyakumari" />
          <br />
          <h1>Krishnagiri</h1>
                    <h3>Krishnagiri, located in Tamil Nadu, India, is renowned for its agricultural activities, with a focus on horticulture, flower farming, and silk production. The district is characterized by scenic hills, historical fortresses like Krishnagiri Fort</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img16} alt="Kanyakumari" />
          <br />
          <h1>Mayiladuthurai</h1>
                    <h3>Mayiladuthurai, situated in Tamil Nadu, India, is known for its religious and cultural heritage. The town is a prominent pilgrimage center with several ancient temples, including the Mayuranathaswamy Temple.</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img17} alt="Kanyakumari" />
          <br />
          <h1>Nagapattinam</h1>
                    <h3>Nagapattinam, located on the Coromandel Coast of Tamil Nadu, India, is a coastal town renowned for its maritime history and cultural diversity,known for the historic Nagapattinam port</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img18} alt="Kanyakumari" />
          <br />
          <h1>Namakkal</h1>
                    <h3>Namakkal, a town in Tamil Nadu, India, is famous for its distinctive rock formations and the historic Namakkal Fort. Known as the "Egg City," it has a thriving poultry industry. </h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img19} alt="Kanyakumari" />
          <br />
          <h1>Perambalur</h1>
                    <h3>The district is known for its historical significance with ancient temples and forts, contributing to its cultural heritage.</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        <div className="grid-item">
          <img style={{ height: '230px', width: '300px' }} src={img19} alt="Kanyakumari" />
          <br />
          <h1>Salem</h1>
                    <h3>Salem, located in Tamil Nadu, India, is renowned for its vibrant textile and steel industries. Surrounded by picturesque hills, the city is known for its historical sites, including the iconic Salem Fort.</h3>
                    <h2><Link className='link' to="/">Click Here</Link></h2>
        </div>
        
      </div>
      <HomeFooter/>
        </>
    )
}

export default Trips