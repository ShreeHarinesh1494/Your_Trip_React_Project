import '../Assests/css/Chennai.css'
import { Link } from 'react-router-dom'
import img1 from '../Assests/images/marina.jpg'
import img2 from '../Assests/images/Kabali.jpg'
import img3 from '../Assests/images/azoo.jpeg'
import img4 from '../Assests/images/kottam.jpg'
const Chennai=()=>
{
    return(
        <>
            <nav class="navbar">
    <div class="left-corner"></div>
    <div class="nav-options">
        <h1>Chennai</h1>
        <Link to="/Home1"><i class="fa fa-home"></i></Link>
        <Link to="/Trips"><i class="fas fa-suitcase"></i></Link>
        <Link to="/Contact"><i class="fas fa-phone"></i></Link>
        <Link to="/Home"><i class="fa fa-dashboard"></i></Link>
        <Link to="/"><i class="fa fa-sign-out"></i></Link>
    </div>
</nav>
<div className='ce'>
<div class="blog-card">
  <div class="meta">
    <div class="photo" style={{ backgroundImage: `url(${img1})`}}></div>
  </div>
  <div class="description">
    <h1>Marina Beach</h1>
    <h2>Chennai's scenic coastline</h2>
    <p>Marina Beach, or simply the Marina, is a natural urban beach in Chennai, Tamil Nadu, India, along the Bay of Bengal. The beach runs from near Fort St. George in the north to Foreshore Estate in the south, a distance of 6.0 km (3.7 mi),making it the second longest urban beach in the world, after Cox's Bazar Beach.It is a prominent landmark in Chennai.</p>
  </div>
</div>
<div class="blog-card alt">
  <div class="meta">
    <div class="photo" style={{ backgroundImage: `url(${img2})`}}></div>
  </div>
  <div class="description">
    <h1>Kapaleeshwarar Temple</h1>
    <h2>Dravidian masterpiece honoring Lord Shiva in Chennai</h2>
    <p>The Kapaleeshwarar Temple is a Hindu temple dedicated to the god Shiva located in Mylapore, Chennai in the Indian state of Tamil Nadu. The temple was built around the 7th century CE and is an example of Dravidian architecture.

According to the Puranas, Parvati worshipped her husband Shiva in the form of a peahen, giving the vernacular name Mylaito the area that developed around the temple.Shiva is worshiped as Kapaleeshwarar. </p>
  </div>
</div>
<div class="blog-card">
  <div class="meta">
    <div className="photo" style={{ backgroundImage: `url(${img3})`}} ></div>
  </div>
  <div class="description">
    <h1>Arignar Anna Zoological Park</h1>
    <h2> A diverse wildlife haven near Chennai</h2>
    <p>Arignar Anna Zoological Park (abbreviated AAZP), also known as the Vandalur Zoo, is a zoological garden located in Vandalur, to southwest of Chennai, Tamil Nadu, about 31 kilometres (19 mi) from the Chennai Central and 15 kilometres (9.3 mi) from Chennai Airport.there were about 47 species of mammals, 63 species of birds, 31 species of reptiles, 5 species of amphibians, 28 species of fishes, and 10 species of insects in the park.</p>
  </div>
</div>
<div class="blog-card alt">
  <div class="meta">
    <div class="photo" style={{ backgroundImage: `url(${img4})`}}></div>
  </div>
  <div class="description">
    <h1>Valluvar Kottam</h1>
    <h2> Iconic monument in Chennai paying homage to the classical Tamil poet Thiruvalluvar</h2>
    <p>The construction of the Valluvar Kottam was conceived and executed by the then Chief Minister of Tamil Nadu M. Karunanidhi during the 1970s.It was designed by South Indian traditional architect V. Ganapati Sthapati, who is also the architect of the Thiruvalluvar Statue at Kanyakumari.It was inaugurated in April 1976 by the then President of India Fakhruddin Ali Ahmed</p>
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

export default Chennai