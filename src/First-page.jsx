import {useState} from 'react';
import {Link} from 'react-router-dom';
import v2 from './assets/v2.mp4';
import './First-page.css';  

export default function FirstPage() {
   
    const [clickNo, setClickNo] = useState(0);
    const handleNoClick = () => {
        const padding = 120;
        const maxWidth = window.innerWidth - padding;
        const maxHeight = window.innerHeight - padding;

        setClickNo({
            top: Math.floor(Math.random() * maxHeight),
            left: Math.floor(Math.random() * maxWidth)
        });
       
    }

  return (
    <div className="first-page">
      <video className="valentine-video" autoPlay muted loop>
        <source src={v2} type="video/mp4" />
      </video>
      <div className="content">
      <h1 className="title">Hey cutiee!!</h1>
      <h1 className="subtitle">Would you be my Valentine?</h1>
      <p className="subtitle2">
        Me might not look as good as you... but me cook nice and happy <br/>
        to be your Personal chef this valentine
      </p>
    
     <Link to="/main-page">
    <button className='yes' onClick={() => {alert('I knew you will say yes!! ❤️😍😍'); }} > Yes</button>
    </Link>
    <button className='no' style={{position: 'absolute', top: clickNo.top, left: clickNo.left}} onMouseEnter={handleNoClick}>No</button>
</div>
    </div>
  );
}
