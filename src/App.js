import Header from "./UI/Header/Header";
import "./styles.css";
import About from "./UI/About/About";
import Visual from "./UI/visual/Visual";
import Footer from "./UI/Footer/Footer";
export default function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Visual />
      <Footer />
    </div>
  );
}
