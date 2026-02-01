import v1 from './assets/v1.mp4';
import './Main-page.css';
export default function MainPage() {
    return (
    <div className="main-page">
      <video className="valentine-video" autoPlay muted loop>
        <source src={v1} type="video/mp4" />
        </video>
        <div className="content">
            <h1>I knew it you will say yes</h1>
            <h2>i can see love for me in ur eyes</h2>
        <h2>Awwww...love You forever and ever😘😘😘😘😘😘</h2>
</div>
    </div>
  );
}