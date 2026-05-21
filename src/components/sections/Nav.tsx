import "../../index.css";
import logo from "../../assets/AE-LOGO.svg"


export default function Nav(){
  return (
<nav className="nav">
  <div className="wrap nav-inner">
    <a className="brand" href="#top">
      <span className="brand-mark">
        <img src={logo} alt="logo" />
    </span>
      <span>Amit Erez</span>
      <span className="brand-status"><span className="pulse-dot"></span>Available May 2026</span>
    </a>
    <div className="nav-links">
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#stack">Stack</a>
      <a href="#contact" className="nav-cta">Get in touch <span className="arrow">↗</span></a>
    </div>
  </div>
</nav>
  )
}

