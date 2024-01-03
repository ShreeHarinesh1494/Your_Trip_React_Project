import '../Assests/css/Content.css'
import { useState,useEffect,useRef } from 'react';
const Content = () => {

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const timelineLineRef = useRef(null);
  const timelineImageRef = useRef(null);

  useEffect(() => {
    const updateTimeline = () => {
      const timelineTop = timelineLineRef.current.getBoundingClientRect().top;
      const maxTimelineHeight = (document.querySelectorAll(".my-container").length - 1) * 100;

      if (timelineTop <= 0) {
        const newScrollPercentage = (-timelineTop / maxTimelineHeight) * 65;
        const adjustedPercentage = Math.min(100, newScrollPercentage);
        setScrollPercentage(adjustedPercentage);
      } else {
        setScrollPercentage(0);
      }
    };

    document.addEventListener("scroll", updateTimeline);

    return () => {
      document.removeEventListener("scroll", updateTimeline);
    };
  }, []);

  useEffect(() => {
    if (timelineLineRef.current && timelineImageRef.current) {
      timelineLineRef.current.style.height = `${scrollPercentage}%`;
      timelineImageRef.current.style.top = `${scrollPercentage}%`;
    }
  }, [scrollPercentage]);
  return (
    <>
    
    <h1 className='nb'>Discovering Tamil Nadu: A Tapestry of Heritage, Culture, and Natural Wonders</h1>
    <div class="my-timeline">
<div class="my-container left-container" ref={timelineLineRef}>
  <h5>Historical Monuments</h5>
  <div class="text-box">
    <p>Tamil Nadu is home to several ancient temples and historical monuments. The Brihadeeswarar Temple in Thanjavur, a UNESCO World Heritage Site, is an architectural marvel and a significant tourist attraction.</p>
  </div>
</div>
<div class="my-container right-container" >
  <h5>Cultural Festivals</h5>
  <div class="text-box">
    <p>The state celebrates various cultural festivals with grandeur, such as Pongal, a harvest festival, and the Natyanjali Dance Festival, which showcases classical dance forms.</p>
  </div>
</div>
<div class="my-container left-container" >
  <h5>UNESCO Heritage Sites</h5>
  <div class="text-box">
    <p>Apart from the Brihadeeswarar Temple, the Great Living Chola Temples, which include the temples of Gangaikonda Cholapuram, Airavatesvara Temple, and Brihadeeswarar Temple, collectively form a UNESCO World Heritage Site.</p>
  </div>
</div>
<div class="my-container right-container">
  <h5>Marina Beach</h5>
  <div class="text-box">
    <p>Marina Beach in Chennai is one of the longest urban beaches in the world, offering a picturesque coastline and attracting both locals and tourists.</p>
  </div>
</div>
<div class="my-container left-container">
  <h5>Pilgrimage Tourism</h5>
  <div class="text-box">
    <p>Tamil Nadu is known for its numerous temples, each with its own unique architectural style and cultural significance. Temples like Meenakshi Amman Temple in Madurai and Ramanathaswamy Temple in Rameswaram draw pilgrims and tourists alike.</p>
  </div>
</div>
<div class="my-container right-container">
  <h5>Cultural Heritage and Arts</h5>
  <div class="text-box">
    <p>The state has a rich tradition of classical arts, including Bharatanatyam (classical dance) and Carnatic music. Tourists often attend performances and festivals to experience the cultural richness.</p>
  </div>
</div>
<div class="my-container left-container">
  <h5>Hill Stations</h5>
  <div class="text-box">
    <p> Tamil Nadu has picturesque hill stations like Ooty, Kodaikanal, and Yercaud, offering a pleasant escape from the heat and bustling city life.</p>
  </div>
</div>
<div class="my-container right-container">
  <h5>Wildlife Sanctuaries</h5>
  <div class="text-box">
    <p>The state is home to several wildlife sanctuaries and national parks, including Mudumalai National Park and Annamalai Wildlife Sanctuary, providing opportunities for eco-tourism and wildlife enthusiasts.</p>
  </div>
</div>
<div className="timeline-line" ref={timelineLineRef}></div>
        <img
          className="timeline-image"
          src="http://flagcorp.brandedbybrandemic.com/wp-content/uploads/2023/10/Frame-39652-1.svg"
          alt=""
          ref={timelineImageRef}
        />
      </div>

{/* <script>
document.addEventListener("DOMContentLoaded", function () {
const timelineLine = document.querySelector(".timeline-line");
const timelineImage = document.querySelector(".timeline-image");

const maxTimelineHeight =
(document.querySelectorAll(".my-container").length - 1) * 100;

window.addEventListener("scroll", () => {
const scrollPercentage = (window.scrollY / maxTimelineHeight) * 65; //Adjust the speed as needed

const adjustedPercentage = Math.min(100, scrollPercentage);
timelineLine.style.height = `${adjustedPercentage}%`;
timelineImage.style.top = `${adjustedPercentage}%`;
});
});

</script> */}
    </>
  );
};

export default Content
