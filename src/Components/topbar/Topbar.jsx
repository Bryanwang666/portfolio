import './topbar.scss';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

export default function Topbar({menuOpen,setMenuOpen}) {

  return (
    <div className={'topbar'+ (menuOpen ? ' active' : '')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro"className='logo'>wBy.</a>
            <div className="itemContainer">
             <SmartphoneIcon className='icon'/><span>+1 204-898-2540</span>
            </div>
            <div className="itemContainer">
              <EmailIcon className='icon'/><span>beaufork@gmail.com</span>
            </div>
        </div>
        <div className="right">
          <div className="hamurger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
