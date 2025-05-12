import './styles/Hero.css'
import profileImage from '../../assets/images/profile1.jpg' // use your actual image path

export default function Hero() {
  return (
<section className="hero">
  <div className="hero-content">
    <div className="hero-left">
      <p className="intro">Hey, I am</p>
      <h1 className="hero-name">Mehmet Emin Eraslan 👋</h1>
      <p className="hero-sub">
        A Full Stack Developer from Turkey, passionate about scalable app architecture and building clean, efficient code.
        Skilled in <span>.NET</span>, <span>React</span>, <span>Angular</span>, <span>Node.js</span>, and <span>Python</span>.
      </p>
      <div className="hero-buttons">
        <a href="#contact" className="btn btn-green">CONTACT ME</a>
        <a href="#projects" className="btn btn-white">CHECK PORTFOLIO</a>
      </div>
    </div>

    <div className="hero-right">
      <img src={profileImage} alt="Mehmet Emin Eraslan" />
    </div>
  </div>

  <div className="hero-stats">
    <div><h3>+700h</h3><p>of development experience</p></div>
    <div><h3>+15</h3><p>Projects Delivered</p></div>
    <div><h3>4.9</h3><p>Average Rating</p></div>
  </div>
</section>

  )
}
