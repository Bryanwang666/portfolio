import { useState } from 'react'
import './works.scss'

export default function Works() {
  const [currentSlider,setCurrentSlider] = useState(0);
  
  const data = [
    {
      id: 1,
      title: "Mobile Social Media App1",
      icon:"./images/web.png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloremque nisi nostrum adipisci eum, quod dolore cumque, nulla, provident consequuntur ducimus necessitatibus ratione hic quidem iure mollitia voluptatum tempore recusandae.",
      img:
        "https://cdn.dribbble.com/users/2597268/screenshots/15468893/media/44313553d73ba41580f1df69749bba28.jpg?compress=1&resize=1200x900",
    },
    {
      id: 2,
      title: "Mobile Social Media App2",
      icon:"./images/web.png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloremque nisi nostrum adipisci eum, quod dolore cumque, nulla, provident consequuntur ducimus necessitatibus ratione hic quidem iure mollitia voluptatum tempore recusandae.",
      img:
        "https://cdn.dribbble.com/users/2597268/screenshots/15468893/media/44313553d73ba41580f1df69749bba28.jpg?compress=1&resize=1200x900",
    },
    {
      id: 3,
      title: "Mobile Social Media App3",
      icon:"./images/web.png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloremque nisi nostrum adipisci eum, quod dolore cumque, nulla, provident consequuntur ducimus necessitatibus ratione hic quidem iure mollitia voluptatum tempore recusandae.",
      img:
        "https://cdn.dribbble.com/users/2597268/screenshots/15468893/media/44313553d73ba41580f1df69749bba28.jpg?compress=1&resize=1200x900",
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
                  <span>Project</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt=''/>
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
