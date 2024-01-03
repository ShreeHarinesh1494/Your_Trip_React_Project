import '../Assests/css/Coimbatore.css'
import { Link } from 'react-router-dom'
import img1 from '../Assests/images/aadiyogi.jpg'
import img2 from '../Assests/images/perur.jpg'
import img3 from '../Assests/images/kodiveri.jpg'
import img4 from '../Assests/images/voc.jpg'
import img5 from '../Assests/images/siruvani.jpg'
import img6 from '../Assests/images/maru.jpg'
import img7 from '../Assests/images/monkeyfalls.jpg'
const Coimbatore=()=>
{
    return(
        <>
            <nav class="navbar">
    <div class="left-corner"></div>
    <div class="nav-options">
        <h1>Coimbatore</h1>
        <Link to="/Home1"><i class="fa fa-home"></i></Link>
        <Link to="/Trips"><i class="fas fa-suitcase"></i></Link>
        <Link to="/Contact"><i class="fas fa-phone"></i></Link>
        <Link to="/Home"><i class="fa fa-dashboard"></i></Link>
        <Link to="/"><i class="fa fa-sign-out"></i></Link>
    </div>
</nav>
<div className='ha'>
<div class="blog-card">
  <div class="meta">
    <div class="photo" style={{ backgroundImage: `url(${img1})`}}></div>
  </div>
  <div class="description">
    <h1>Adiyogi </h1>
    <h2>The Source of Yoga</h2>
    <p>Adiyogi - The Source of Yoga is situated 30 kilometers (20 miles) west of Coimbatore, Tamil Nadu. Coimbatore, a major industrial city in southern India, is well connected by air, rail and road. Major airlines operate regular flights to Coimbatore from Chennai, Delhi, Mumbai and Bengaluru. Train services are available from all major cities in India. </p>
  </div>
</div>
<div class="blog-card alt">
  <div class="meta">
    <div class="photo" style={{ backgroundImage: `url(${img2})`}}></div>
  </div>
  <div class="description">
    <h1>Perur Pateeswarar Temple</h1>
    <h2>A serene and divine architectural gem</h2>
    <p>Perur Pateeswarar Temple is a Hindu temple dedicated to Lord Shiva located at Perur, in western part of Coimbatore in state of Tamil Nadu in India. The temple was built by Karikala Chola in 2nd century CE. The temple is located on the bank of the Noyyal River and has been patronized by poets like Arunagirinathar and Kachiappa Munivar. Lord Shiva, known as ‘Patteeswarar’, is the presiding deity of this temple together with his consort Parvati, who is known as ‘Pachainayaki’. </p>
  </div>
</div>
<div class="blog-card">
  <div class="meta">
    <div className="photo" style={{ backgroundImage: `url(${img3})`}} ></div>
  </div>
  <div class="description">
    <h1>Kodiveri Dam</h1>
    <h2>Nature's reservoir of tranquility and power</h2>
    <p>Kodiveri Dam is a masonry dam located on the Bhavani river in Gobichettipalayam taluk, Erode district in the Indian state of Tamil Nadu. The dam is situated along the State Highway 15 about 15 km (9.3 mi) from Gobichettipalayam towards Sathyamangalam in the western region of the state.</p>
  </div>
</div>
<div class="blog-card alt">
  <div class="meta">
    <div class="photo" style={{ backgroundImage: `url(${img4})`}}></div>
  </div>
  <div class="description">
    <h1>VOC park and zoo</h1>
    <h2>Nature's vibrant sanctuary</h2>
    <p>V O Chidambaranar park and zoo (abbreviated VOC park) is a zoological garden and amusement park located in Coimbatore, Tamil Nadu, India. As of 2013, the park houses around 890 animals including 335 birds, 106 mammals and 54 reptiles.The park is named after freedom fighter V O Chidambaram Pillai and is managed by Coimbatore city Corporation. </p>
  </div>
</div>
<div class="blog-card">
  <div class="meta">
    <div className="photo" style={{ backgroundImage: `url(${img5})`}} ></div>
  </div>
  <div class="description">
    <h1>Siruvani Dam</h1>
    <h2>A serene reservoir nestled in nature's embrace</h2>
    <p>Siruvani dam is a dam in Palakkad District, Kerala located 46 km away from Palakkad town. This dam constructed across the Siruvani River, is for supplying drinking water to the city of Coimbatore in Tamil Nadu. The dam is surrounded by reserve forests. Muthikulam hill is situated on the eastern side of the dam. There is a natural waterfall in the hill. The waterfalls and the Dam are big tourist attractions. </p>
  </div>
</div>
<div class="blog-card alt">
  <div class="meta">
    <div class="photo" style={{ backgroundImage: `url(${img6})`}}></div>
  </div>
  <div class="description">
    <h1>Maruthamalai Marudhachalamurthy Temple</h1>
    <h2>A sacred hilltop sanctuary steeped in divine tranquility.</h2>
    <p>The Subramaniya Swamy Temple, Marudhamalai (also Maruthamalai or Marudamalai), or the Marudhamalai Murugan Temple, is a popular 12th-century hill temple situated in Coimbatore, Tamil Nadu, India. Built by Tamil kings during the Sangam period as indicated in the Purananuru, the temple is dedicated to Lord Murugan and is considered the Seventh House of Lord Murugan.</p>
  </div>
</div>
<div class="blog-card">
  <div class="meta">
    <div className="photo" style={{ backgroundImage: `url(${img7})`}} ></div>
  </div>
  <div class="description">
    <h1>Monkey Falls</h1>
    <h2> Nature's cascade of serenity hidden in the Western Ghats.</h2>
    <p>Monkey Falls are natural waterfalls located near the uphill ghat road Valparai on the Pollachi-Valparai road in the Anaimalai Hills range, in Coimbatore district.

Monkey Falls is about 30 km from Pollachi. Refreshing Natural Water Falls about 6 km from Azhiyar Dam. Monkey Falls is located on road connecting Pollachi and Valparai.</p>
  </div>
  </div>
</div>

        </>
    )
}

export default Coimbatore