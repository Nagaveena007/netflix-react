import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNav from "./components/MyNav/MyNav";
import Home from "./components/Home/Home";
import FooterPart from "./components/Footer/FooterPart";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Home />
      <FooterPart />
    </div>
  );
}

export default App;
