import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import {Header} from './components/Header';
import BackgroundImg from './components/BackgroundImg';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import Display from './components/Display';
import ItemDisplay from './components/ItemDisplay';
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [item, updateItem] = useState([]);
  console.log("item",item);
  return (
    <Router>
    <div className="App">
   
      <Switch>
        <Route path="/catalog">
          <Display item={item} updateItem={updateItem}/>
        </Route>
        <Route path="/about">
        <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/item">
          <ItemDisplay item={item} updateItem={updateItem}/>
        </Route>
        <Route path="/edit/:id">
          <EditItem/>
        </Route>
        <Route path="/add">
        <AddItem/>
        </Route>
        <Route path="/home">
          <BackgroundImg/>
        </Route>
        <Route exact path="/">
          <Header/>
        </Route>
      </Switch> 
    </div>
    </Router>
  );
}

export default App;
