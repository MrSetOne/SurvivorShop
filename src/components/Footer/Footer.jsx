import "./Footer.scss";
import { FacebookOutlined, TwitterOutlined, YoutubeOutlined, InstagramOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="logos">
        <a href="https://www.facebook.com" target="_blank">
          <FacebookOutlined />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <TwitterOutlined />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <YoutubeOutlined />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <InstagramOutlined />
        </a>
      </div>
      <p className="copy">
        &copy; 2022 Survivor Shop ---(Mike & Alex)--- All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
