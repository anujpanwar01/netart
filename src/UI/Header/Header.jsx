import logo from "../../assister/logo.png";
import { MainHeader } from "./Header.styles";

const Header = () => {
  return (
    <MainHeader>
      <div>
        <img src={logo} alt={logo} />
      </div>
    </MainHeader>
  );
};
export default Header;
