import "./Footer.css";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
const FooterPart = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <BsFacebook className="mr-5 mb-5 social" />
        <BsInstagram className="mr-5 mb-5 social" />
        <BsTwitter className="mr-5 mb-5 social" />
        <BsYoutube className="mr-5 mb-5 social" />
      </div>

      <div className="grid-footer">
        <div className="footer-section">
          <p>Audio and Subtitles</p>
          <p>Media Centre</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </div>

        <div className="footer-section">
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
        </div>

        <div className="footer-section">
          <p>Help Centre</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </div>

        <div className="footer-section">
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </div>
      </div>
      <button className="btn-footer">Service Code</button>
      <p className="p-footer">&copy; 1997-2021 Netflix, Inc.</p>
    </footer>
  );
};
export default FooterPart;
