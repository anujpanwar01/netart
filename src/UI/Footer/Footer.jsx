import { FooterSection } from "./Footer.styles";
import { BsFacebook, BsGlobe2 } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterSection>
      <div>
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <aside>
          <p>CHEMICALS & PROCESS</p>
          <p>POWER</p>
          <p>WATER & WASTE WATER</p>
          <p>OILS & GAS</p>
          <p>PHARMA</p>
          <p>SUGARS & DISTILLERIES</p>
          <p>PAPER & PULP</p>
          <p>MARINE & DEFENCE</p>
          <p>METAL & MINING</p>
          <p>FOOD & BEVERAGE</p>
          <p>PETROCHEMICAL & REFINERIES</p>
          <p>SOLAR</p>
          <p>BUILDING</p>
          <p>HVAC</p>
          <p>FIRE</p>
          <p>FIGHTING</p>
          <p>AGRICULTURE & RESIDENTIAL</p>
        </aside>
      </div>
      <div className="social">
        <div>
          <FaPhoneSquareAlt size={32} />
          <p>Toll Free</p>
          <strong>1800 200 1234</strong>
        </div>
        <div>
          <BsFacebook size={32} />
          <p>www.facebook.com/cripumps</p>
        </div>
        <div>
          <BsGlobe2 size={32} />
          <p>www.cripumps.com</p>
        </div>
      </div>
    </FooterSection>
  );
};
export default Footer;
