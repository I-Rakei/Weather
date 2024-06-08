import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted" style={{position: "fixed", width: "100%", bottom: 0 }}>
      <div className="container d-flex justify-content-center py-5">
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-1 rounded-circle" style={{ backgroundColor: "#54456b", border: "none" }}>
          <FontAwesomeIcon  icon={faFacebookF} style={{ fontSize: "15px" }} />
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-1 rounded-circle"  style={{ backgroundColor: "#54456b", border: "none" }}>
          <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "15px" }} />
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-1 rounded-circle" style={{ backgroundColor: "#54456b", border: "none" }}>
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "15px" }} />
        </button>
        <button type="button" className="btn btn-primary btn-lg btn-floating mx-1 rounded-circle" style={{ backgroundColor: "#54456b", border: "none" }}>
          <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "15px" }} />
        </button>
      </div>

      {/* Copyright */}
      <div className="text-center text-white p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2020 Copyright:<p>I.M Rakei</p>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
