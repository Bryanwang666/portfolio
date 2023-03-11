import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState } from 'react';
import {
  featuredPortfolio,
  webPortfolio,
  emailPortfolio,
  dataPortfolio,
} from "../../data";
import { useEffect } from 'react';

export default function Portfolio() {
  const [selected, setSelected] = useState("Featured");
  const [data, setData] = useState([]);
  const list = [
    {id:"Featured",
    title:"Featured",},
      {id:"Website",
      title:"Website",},
      {id:"Marketing Email",
      title:"Marketing Email",},
      {id:"Data Analyst",
      title:"Data Analyst",},
  ];

  useEffect(()=>{
    switch(selected){
      case "Featured":
        setData(featuredPortfolio);
        break;

      case "Website":
        setData(webPortfolio);
        break;

      case "Marketing Email":
        setData(emailPortfolio);
        break;

      case "Data Analyst":
        setData(dataPortfolio);
        break;

      default:
        setData(featuredPortfolio);
    }
  },[selected])

  return (
    <div className='portfolio'id='portfolio'>
      <h2>portfolio</h2>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} active={selected === item.id} setSelected = {setSelected} id={item.id}/>
        ))}
      </ul>
      <div className='container'>
        
        {data.map((d) => (
          <div className='item'>
          <img src={d.img} alt='' />
          <h3>{d.title}</h3>
        </div>
        ))}
        
        
      </div>
    </div>
  )
}
