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
          <p className="contact">
            <BsTelephone /> +254705580692
          </p>
          <p className="contact">
            <AiOutlineMail /> njaagagakure@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
