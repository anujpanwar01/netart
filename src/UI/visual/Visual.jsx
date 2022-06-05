import img from "../../assister/3.png";
import { VisualSection } from "./Visual.styles";
const Visual = () => {
  return (
    <VisualSection>
      <h3>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.{" "}
      </h3>
      <div>
        <img src={img} alt={img} />
      </div>
      <p>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE
        SEGMENTS
      </p>
    </VisualSection>
  );
};

export default Visual;
