import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
// import artworksamples from "../art_data"
import Limbism from "./Limbism"


function App() {

  return (
    <div className="app">
      <Header />
      <div className="ui grid main-container">
        <Navbar />
        <Limbism />
      </div>
      <Footer />
    </div>
  );
}

export default App;

