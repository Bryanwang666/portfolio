import { useState } from 'react'
import './works.scss'

export default function Works() {
  const [currentSlider,setCurrentSlider] = useState(0);
  const handleContextMenu = (e) => {
    e.preventDefault(); // 阻止默认行为
  };

  const handleDragStart = (e) => {
    e.preventDefault(); // 阻止默认行为
  };
  const data = [
    {
      id: 1,
      title: "WCH",
      icon:"./images/web.png",
      desc:"The site appears to be the Warkentin Custom Homes, a company based in Manitoba, Canada that specializes in building custom homes for clients. The website features information about their services, as well as photo galleries of their completed projects. Visitors can also use the site to request a consultation or learn more about the company.",
      img:
        "./images/wch-long.png",
      url:"https://warkentinhomes.com/",
    },
    {
      id: 2,
      title: "6P Marketing",
      icon:"./images/web.png",
      desc:"6P Marketing is a full-service marketing company that showcases its professional services and marketing expertise to potential clients through its website. The website includes company information, service offerings, client case studies, team introductions, and the latest news, demonstrating the company's professionalism and capabilities. Additionally, the website is designed with a clean and clear layout, making it easy to navigate for users.",
      img:
        "./images/6pmarketing-long.png",
      url:"https://6pmarketing.com/",
    },
    {
      id: 3,
      title: "Custom Helicopters",
      icon:"./images/web.png",
      desc:"Custom Helicopter is a company that specializes in designing and building unique, high-quality helicopters tailored to the specific needs of their clients. Their website showcases their expertise in the field and provides detailed information about their services, including custom helicopter design, manufacturing, maintenance, and repair. Through their website, potential clients can learn more about the company's capabilities, view photos and videos of their helicopters in action, and easily contact them to discuss their project requirements.",
      img:
        "./images/Custom-Heli-long.png",
      url:"https://www.customheli.com/",
    },
    {
      id: 4,
      title: "Multi Project Onboarding Journey (Email)",
      icon:"./images/writing.png",
      desc:"Multi Project Onboarding Journey is a journey that runs on SFMC (Salesforce Marketing Cloud). It is designed to cater to users with different account types and statuses by distinguishing them in data. Through the use of content blocks and AMPscript, the journey delivers customized content to the corresponding customers. This approach ensures that users receive personalized and relevant information based on their specific needs and status. By leveraging SFMC's advanced segmentation and automation capabilities, Multi Project Onboarding Journey offers an effective way to engage with users and improve their overall experience with the product or service.",
      img:
        "./images/Multi-Project-Onboarding-Journey-long.png",
    },
  ]
  const handleClick = (way)=>{
    way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider-1 : 2) : 
    setCurrentSlider(currentSlider<(data.length -1) ? currentSlider+1 : 0)
  }
  return (
    <div className='works'id='works'>
      <div className="slider" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
        {data.map((d)=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt=''/>
                 
                </div>
                <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <a href={d.url} target="_blink">Project</a>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt={d.title} onContextMenu={handleContextMenu} onDragStart={handleDragStart}/>
            </div>
          </div>
        </div>
        ))}
      </div>

      <img src='images/arrow.png' className="arrow left" alt='' onClick={()=>handleClick("left")}/>
      <img src='images/arrow.png' className="arrow right" alt='' onClick={()=>handleClick("right")}/>
    </div>
  )
}
