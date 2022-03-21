import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";
import Img1 from "./bazaarbackdoor.jpg";
import Img2 from "./redGreen.jpg";
import Img3 from "./rockets.jpg";
const slideImages = [
  {
    url: Img1,
    title: "Watch Out! BazarBackdoor is Abusing Website Contact Forms",
    summary: "Recently, the BazarBackdoor malware was observed spreading via corporate website contact forms rather than its typical phishing email attack chain target firms. To avoid any possible security flag, the attackers use file-sharing services TransferNow and WeTransfer to send malicious files. Website a ... ",
    link: "https://cyware.com/news/watch-out-bazarbackdoor-is-abusing-website-contact-forms-80040679",
  },
  {
    url: Img2,
    title: "New Botnet Targets Linux Devices Via Log4J Vulnerability",
    summary: "New B1txor20 botnet is actively exploiting Log4j flaws in Linux systems to create a bot army that helps hackers install rootkits and steal sensitive records.&nbsp;The bot sends the stolen information, results of any command execution, or any other information to its C2 server in form of a DNS reque ...",
    link: "https://cyware.com/news/new-botnet-targets-linux-devices-via-log4j-vulnerability-250231ad",
  },
  {
    url: Img3,
    title: "Around 34 Ransomware Variants Detected In Q4 2021",
    summary: "The ransomware landscape witnessed 34 different variants in approximately 722 distinct attacks, with LockBit 2.0, Conti, and PYSA occupying the top three places.&nbsp;In comparison to Q3 2021 data, the attacks on the manufacturing sector have declined while consumer and industrial products rose by ... ",
    link: "https://cyware.com/news/around-34-ransomware-variants-detected-in-q4-2021-a7a2d96e",
  },
];

const Slideshow = () => {
  return (
    <div className="slides">
      <div className="title" >
        Latest News and Threats
      </div>
      <div className="divider"></div>
      <Fade autoplay={true} duration={3500}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="slide">

            <img className="linkImage" src={slideImage.url} height={"500px"}></img>

            <div className="linkText">
              <div className="titleText">
                {slideImage.title}
              </div>
              <div className="divider"></div>
              <div className="contentText">
                {slideImage.summary}</div>
              <a href={slideImage.link} >Read More</a>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};
export default Slideshow;
