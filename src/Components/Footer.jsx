import { ArrowUpLeft, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="inner-content">
        <div className="top">
          <div className="left">
            <p>Let’s get started</p>
            <span>hello@entlify.com</span>
          </div>
          <div class="form-wrapper">
            <h2>Learn how Entlify can help your business</h2>

            <form class="contact-form">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Company" />
              <input type="email" placeholder="Work email" />

              <button type="submit">Request a Call</button>

              <label class="checkbox">
                <input type="checkbox" />
                <span>
                  By clicking the button, I agree to the
                  <a href="#">privacy policy</a>
                </span>
              </label>
            </form>
          </div>
        </div>
        <div className="bottom">
  <div className="bottom-left">
    <div className="logo">
      <ArrowUpLeft color="#FF3E00" size={40} strokeWidth={3} />
      <h3>entlify</h3>
    </div>
    <p>©2025 Entlify. All rights reserved.</p>
  </div>

  <div className="bottom-center">
    <a href="#">Careers</a>
    <a href="#">Blog</a>
    <a href="#">Cookies</a>
    <a href="#">Privacy Policy</a>
  </div>

  <div className="bottom-right">
    <span className="back-to-top">
      Back to top <strong>↑</strong>
    </span>
    <div className="social">
      <Linkedin />
      <Instagram />
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Footer;
