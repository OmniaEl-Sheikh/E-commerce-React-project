import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer>
      <div className="wrapper"></div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <p className="footer-para">
              Developer: <span className="my-name"> Omnia El-sheikh</span>
            </p>

            <div className="contact"></div>
            <div className="socials">
              <a
                href="https://www.facebook.com/profile.php?id=100009644198365"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/omnia-mohamed-elsheikh-0a9248201"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              
              <a
                href="https://github.com/OmniaEl-Sheikh"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <p className="copyright">
              Copyright&nbsp;&copy;&nbsp;Ecommerce Site|Trust Online shopping
            </p>
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
