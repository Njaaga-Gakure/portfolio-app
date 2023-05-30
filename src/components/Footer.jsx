import { socialLinks } from "../utils/data";
import { BsTelephone, AiOutlineMail } from "react-icons/all";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-center">
        <ul className="footer-social">
          {socialLinks.map(({ id, icon, url }) => {
            return (
              <li key={id}>
                <a href={url} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
        <p className="footer-text">
          copyright &copy; Brian Gakure's portfolio
          <span> {new Date().getFullYear()}</span> all rights reserved
        </p>
        <div className="contacts">
          <p className="contact-text">
            <BsTelephone className="contact-icon" />
              +254705580692
          </p>
          <p className="contact-text">
            <AiOutlineMail className="contact-icon" />
            njaagagakure@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
