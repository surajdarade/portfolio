import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => (
  <div className="app__social">
    <div style={{ cursor: "pointer" }}>
      <FaLinkedin
        onClick={() => window.open("https://www.linkedin.com/in/surajdarade/")}
      />
    </div>
    <div style={{ cursor: "pointer" }}>
      <FaGithub
        onClick={() => window.open("https://www.github.com/surajdarade/")}
      />
    </div>
    <div style={{ cursor: "pointer" }}>
      <SiLeetcode
        onClick={() => window.open("https://www.leetcode.com/u/surajdarade/")}
      />
    </div>
    <div style={{ cursor: "pointer" }}>
      <BsInstagram
        onClick={() => window.open("https://www.instagram.com/surajdesync/")}
      />
    </div>
    <div style={{ cursor: "pointer" }}>
      <FaWhatsapp onClick={() => window.open("https://wa.me/+917038468629")} />
    </div>
    <div style={{ cursor: "pointer" }}>
      <FaXTwitter
        onClick={() => window.open("https://www.twitter.com/surajdesync/")}
      />
    </div>
  </div>
);

export default SocialMedia;
