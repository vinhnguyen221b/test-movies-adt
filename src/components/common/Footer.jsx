import React from "react";
import logo from "../../image/logo.png";
function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-info">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            ratione architecto at rem officia consectetur, excepturi vitae sequi
            molestias nesciunt repudiandae earum! Non totam perspiciatis,
            blanditiis nam quos nulla ex?
          </p>
        </div>
        <div className="footer-contact">
          <p>Phone: 0373355731</p>
          <p>Email: vinhguyen221b@gmail.com</p>
          <p>Address: Lac Long Quan, Tan Binh</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
