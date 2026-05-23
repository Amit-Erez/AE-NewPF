import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/AE-LOGO.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="brand">
          <a href="#top">
            <span className="brand-mark brand-mark-footer">
              <img src={logo} alt="logo" />
            </span>
          </a>
          <p>
            <span style={{fontSize:"14px"}}><FontAwesomeIcon icon={faCopyright} />{" "}</span>
            2026 Amit Erez
          </p>
        </div>
        <div>Designed &amp; built in Portland, OR</div>
        <div>Set in Instrument Serif · Geist · Geist Mono</div>
      </div>
    </footer>
  );
}
