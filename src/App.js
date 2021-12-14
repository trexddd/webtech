import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import About from './components/About';
import Home from './components/Home';
<<<<<<< HEAD
import Guide from './components/Guide';
import Help from './components/Help';
import Started from './components/getstarted';
import Prebuilt from './components/Prebuilt';
=======
import Tech from './components/Tech';
import Contact from './components/Contact';
import ElloBot from './components/ElloBot';
>>>>>>> 24e8699e9dba6014d551205b27d5816e328997f5
import Navvy from './Navbar';
import Lowendpc from './components/Lowendpc';
import Midlevelpc from './components/midlevel';
import Performance from './components/Performance';
import Cart from './components/Cart';
import Cart1 from './components/Cart1';
import Cart2 from './components/Cart2';
import Cart3 from './components/Cart3';
import {Route,Link,Router} from 'react-router-dom';
function App() {
  return (
    <>
    <Navvy/>
    <Route exact path="/ElloBot" component={ElloBot}/>
    <Route exact path="/" component={Home}/>
<<<<<<< HEAD
    <Route exact path="/Build" component={Build}/>
    <Route exact path="/Guide" component={Guide}/>
    <Route exact path="/Help" component={Help}/>
    <Route exact path="/getstarted" component={Started}/>
    <Route exact path="/Prebuilt" component={Prebuilt}/>
    <Route exact path="/Lowendpc" component={Lowendpc}/>
    <Route exact path="/Midlevelpc" component={Midlevelpc}/>
    <Route exact path="/Performancepc" component={Performance}/>
    <Route exact path="/Cart" component={Cart}/>
    <Route exact path="/Cart1" component={Cart1}/>
    <Route exact path="/Cart2" component={Cart2}/>
    <Route exact path="/Cart3" component={Cart3}/>
=======
    <Route exact path="/About" component={About}/>
    <Route exact path="/Tech" component={Tech}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/" component={Home}/>


>>>>>>> 24e8699e9dba6014d551205b27d5816e328997f5
    </>
  );
}

export default App;
