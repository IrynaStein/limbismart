import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
// import artworksamples from "../art_data"
import Limbism from "./Limbism"


function App() {

  return (
    <div className="app">
      <Header />
      {/* <div className="ui grid"> */}
        <div className="ui relaxed grid">
          <div className="four wide column">
        <Navbar />
        </div>
        <div className="twelve wide column">
        <Limbism />
        </div>
        </div>
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;

