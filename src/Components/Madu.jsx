import '../Assests/css/Madu.css'
import { Link } from 'react-router-dom'
import img1 from '../Assests/images/meena.jpg'
import img2 from '../Assests/images/alagar.jpg'
import img3 from '../Assests/images/vaigai.jpg'
import img4 from '../Assests/images/gandhi.jpg'
import img5 from '../Assests/images/kutla.jpg'
import img6 from '../Assests/images/nayak.jpg'
const Madurai=()=>
{
    return(
        <>
        <nav class="navbar">
    <div class="left-corner"></div>
    <div class="nav-options">
        <h1>Madurai</h1>
        <Link to="/Home1"><i class="fa fa-home"></i></Link>
        <Link to="/Trips"><i class="fas fa-suitcase"></i></Link>
        <Link to="/Contact"><i class="fas fa-phone"></i></Link>
        <Link to="/Home"><i class="fa fa-dashboard"></i></Link>
        <Link to="/"><i class="fa fa-sign-out"></i></Link>
    </div>
</nav>
<div className='ma'>
<div class="blog-card">
  <div class="meta">
    <div class="photo" style={{ backgroundImage: `url(${img1})`}}></div>
  </div>
  <div class="description">
    <h1>Meenakshi Temple</h1>
    <h2>Majestic Hindu shrine in Madurai</h2>
    <p>Arulmigu Meenakshi Sundaraswarar Temple a.k.a Arulmigu Meenakshi Amman Thirukkovil is a historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai, Tamil Nadu, India. It is dedicated to the goddess Meenakshi, a form of Shakti, and her consort, Sundareshwarar, a form of Shiva.The temple is at the centre of the ancient temple city of Madurai mentioned in the Tamil Sangam literature, with the goddess temple mentioned in 6th-century CE texts.</p>
  </div>
</div>
<div class="blog-card alt">
  <div class="meta">
    <div class="photo" style={{ backgroundImage: `url(${img2})`}}></div>
  </div>
  <div class="description">
    <h1>Azhagar Kovil</h1>
    <h2>Where serenity meets divinity in Madurai's embrace</h2>
    <p>Azhagar Kovil is a village in Madurai district in the South Indian state of Tamil Nadu. The history and living of the village is centered around Kallazhagar Temple. Constructed in the Dravidian style of architecture, the temple is glorified in the Nalayira Divya Prabandham, the early medieval Tamil canon of the Alvar saints from the 6th–9th centuries CE. It is one of the 108 Divya Desams dedicated to Vishnu, who is worshiped as Kallazhagar.</p>
  </div>
</div>
<div class="blog-card">
  <div class="meta">
    <div className="photo" style={{ backgroundImage: `url(${img3})`}} ></div>
  </div>
  <div class="description">
    <h1>Vaigai Dam</h1>
    <h2>Tamil Nadu's water guardian</h2>
    <p>The Vaigai Dam is built across the Vaigai River near Andipatti, in the Theni district of Tamil Nadu, southern India. Near the dam, the Government of Tamil Nadu has constructed an Agricultural Research Station for researching the growing of a variety of crops, including rice, sorghum, blackgram, cowpea and cotton.</p>
  </div>
</div>
<div class="blog-card alt">
  <div class="meta">
    <div class="photo" style={{ backgroundImage: `url(${img4})`}}></div>
  </div>
  <div class="description">
    <h1>Gandhi Memorial Museum</h1>
    <h2>A tribute to Mahatma Gandhi's legacy in the heart of Madurai.</h2>
    <p>Gandhi Memorial Museum, established in 1959, is a memorial museum for Mahatma Gandhi located in the city of Madurai in Tamil Nadu, India. Known as Gandhi Museum, it is now one of the five Gandhi Sanghralayas (Gandhi Museums) in the country. It includes a part of the blood-stained garment worn by Gandhi when he was assassinated by Nathuram Godse.</p>
  </div>
</div>
<div class="blog-card">
  <div class="meta">
    <div className="photo" style={{ backgroundImage: `url(${img5})`}} ></div>
  </div>
  <div class="description">
    <h1>Kutladampatti Falls</h1>
    <h2>Madurai's serene cascade.</h2>
    <p>Kutladampatti Falls is a waterfall located in the village of Kutladampatti near Vadipatti in Madurai district about 30 km (19 mi) northwest of Madurai, Tamil Nadu, India.The waterfall is in a reserve forest managed by the Tamil Nadu Forest Department.The water falls from a height of about 27 metres (89 ft).</p>
  </div>
</div>
<div class="blog-card alt">
  <div class="meta">
    <div class="photo" style={{ backgroundImage: `url(${img6})`}}></div>
  </div>
  <div class="description">
    <h1>Thirumalai Nayak Palace</h1>
    <h2>Architectural splendor in the heart of Madurai.</h2>
    <p>An artistic blend of Dravidian and Islamic styles, Thirumalai Nayak Palace is a place worth admiring and exploring when on a Madurai Tour. It was built in 1635, by the King Thirumalai Nayak who had the vision of creating a masterpiece for royal stay. It was designed as a residence for the king by an Italian architect. This palace is a must visit for history lovers and those who love to explore architectural fineness of bygone eras.</p>
  </div>
</div>
</div>
        </>
    )
}
export default Madurai