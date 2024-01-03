import '../Assests/css/KanyaKumari.css'
import { Link } from 'react-router-dom'
import img1 from '../Assests/images/rock.jpg'
import img2 from '../Assests/images/memo.jpg'
import img3 from '../Assests/images/falls.jpg'
import img4 from '../Assests/images/church.jpg'
const KanyaKumari=()=>
{
    return(
        <>
            <nav class="navbar">
    <div class="left-corner"></div>
    <div class="nav-options">
        <h1>KanyaKumari</h1>
        <Link to="/Home1"><i class="fa fa-home"></i></Link>
        <Link to="/Trips"><i class="fas fa-suitcase"></i></Link>
        <Link to="/Contact"><i class="fas fa-phone"></i></Link>
        <Link to="/Home"><i class="fa fa-dashboard"></i></Link>
        <Link to="/"><i class="fa fa-sign-out"></i></Link>
    </div>
</nav>
<div className='ky'>
<div class="blog-card">
  <div class="meta">
    <div class="photo" style={{ backgroundImage: `url(${img1})`}}></div>
  </div>
  <div class="description">
    <h1>Vivekananda Rock Memorial</h1>
    <h2>Spiritual landmark at the confluence of the Indian Ocean, Arabian Sea, and Bay of Bengal</h2>
    <p>Vivekananda Rock Memorial is a monument and popular tourist attraction in Kanyakumari, India's southernmost tip.The memorial stands on one of the two rocks located about 500 meters off mainland of Vavathurai. </p>
  </div>
</div>
<div class="blog-card alt">
  <div class="meta">
    <div class="photo" style={{ backgroundImage: `url(${img2})`}}></div>
  </div>
  <div class="description">
    <h1> Gandhi Memorial</h1>
    <h2> A tranquil memorial in Kanyakumari dedicated to Mahatma Gandhi's historic visit</h2>
    <p>After Indian nationalist Mahatma Gandhi was tragically assassinated in 1948 his remains were cremated and sent to various parts of the country to honor various mourning events. One such place was the town of Kanyakumari where a portion of his ashes were put on display before being ritually deposited in the sea. After the ashes were removed, a memorial mandapam (a pillared structure used for public ritual) was built on the site where his ashes had rested.</p>
  </div>
</div>
<div class="blog-card">
  <div class="meta">
    <div className="photo" style={{ backgroundImage: `url(${img3})`}} ></div>
  </div>
  <div class="description">
    <h1>Thirparappu</h1>
    <h2> Nature's cascading beauty in Kanyakumari district</h2>
    <p>Thirparappu is a town located in the Kanyakumari District in the Indian state of Tamil Nadu. It is a popular tourist destination. It is located 5.9 km (3.7 mi) from the nearby town Arumanai , 6.9 km (4.3 mi) from Kulasekaram , 42 km (26 mi) from Nagercoil, headquarters of the Kanyakumari District, and 55 km (34 mi) from Thiruvananthapuram, the capital of the Indian state of Kerala. It is famous for its falls on the Kodayar (Kothai) River and the Pechiparai Dam.</p>
  </div>
</div>
<div class="blog-card alt">
  <div class="meta">
    <div class="photo" style={{ backgroundImage: `url(${img4})`}}></div>
  </div>
  <div class="description">
    <h1>Our Lady of Ransom Church</h1>
    <h2>A sacred place of worship in Kanyakumari, blending spirituality and architectural elegance.</h2>
    <p>Our Lady of Ransom Church in Kanyakumari is a symbol of religious devotion and architectural grace. The church, with its serene surroundings, invites both pilgrims and admirers of historical beauty to experience a tranquil spiritual atmosphere.</p>
  </div>
</div>
{/* <div class="blog-card">
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
  </div> */}
</div>

        </>
    )
}

export default KanyaKumari