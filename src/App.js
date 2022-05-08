import Header from "./components/Header";
import './styles/app.css' 
import SubHeader from "./components/SubHeader";
import Deals from "./components/Deals";
import SeasonalDeals from "./components/SeasonalDeals";
import Cruises from "./components/Cruises";
import Activities from "./components/Activities";
import Rental from "./components/Rental";
import Visa  from './components/Visa';
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Discount from './components/Discounts.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <SubHeader/>
      <Deals/>
      <SeasonalDeals/>
      <Discount/>
      <Cruises/>
      <Activities/>
      <Rental/> 
      <Visa/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
