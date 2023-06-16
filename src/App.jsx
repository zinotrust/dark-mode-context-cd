import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
