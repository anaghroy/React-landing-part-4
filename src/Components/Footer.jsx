import { ArrowUpLeft, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

const Footer = ({ formRef, navbarRef }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const scrollToTop = () => {
    navbarRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="main-footer">
      <div className="inner-content">
        <div className="top">
          <div className="left">
            <p>Let’s get started</p>
            <span>hello@entlify.com</span>
          </div>
          <div className="form-wrapper" ref={formRef}>
            <h2>Learn how Entlify can help your business</h2>
            <form className="contact-form">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" disabled={!accepted}>
                Request a Call
              </button>

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={() => setAccepted(!accepted)}
                />
                <span>
                  By clicking the button, I agree to the
                  <a href="#"> privacy policy</a>
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
            <p>&copy;2025 Entlify. All rights reserved.</p>
          </div>

          <div className="bottom-center">
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Cookies</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div className="bottom-right">
            <span className="back-to-top" onClick={scrollToTop}>
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
