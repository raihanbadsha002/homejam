import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/HomePage/Header';
import {
  BrowserRouter as Router,
 
} from "react-router-dom";
import UpcomingShow from './components/HomePage/UpcomingShow';
import Review from './components/HomePage/Review';

function App() {
  return (
    <Router>
      <Header/>
      <UpcomingShow/>
      <Review/>
   </Router>
  );
}

export default App;
