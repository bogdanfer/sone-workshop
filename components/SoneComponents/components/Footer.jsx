// import styles from "../MeLlamoArt.module.css";
import Icon from "./Icon/Icon";

const Footer = () => {
  return (
    <footer>
      <p>ME LLAMO ART © 2022</p>
      <div>
        <a
          href={"https://www.instagram.com/mellamo_art/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon variant="instagram" />
        </a>
        
        <a
          href={"https://twitter.com/MellamoArt"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon variant="twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
