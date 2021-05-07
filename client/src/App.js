
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile'
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Route path="/" exact render= {()=><Home/>}></Route>
      <Route path="/register" exact render= {()=><Register/>}></Route>
      <Route path="/login" exact render= {()=><Login/>}></Route>
      <Route path="/profile" exact render= {()=><Profile/>}></Route>
    </Router>
    </>
  );
}

export default App;
