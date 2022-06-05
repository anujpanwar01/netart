import award from "../../assister/1.png";
import prize from "../../assister/2.png";
import { AboutSection, AboutText, AboutImg } from "./About.styles";

const About = () => {
  return (
    <AboutSection>
      <AboutImg>
        <img src={award} />
      </AboutImg>

      <AboutText>
        <h1>
          {" "}
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h1>
        <ul>
          <li>
            <p>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </p>
          </li>
          <li>
            <p>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </p>
          </li>
        </ul>
        <div className="prize">
          <img src={prize} alt={prize} />
        </div>
        <p>
          Government of India has awarded the "National Energy Conservation
          Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
          received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &
          Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
      </AboutText>
    </AboutSection>
  );
};
export default About;
