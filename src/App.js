import './App.css';
import Navbar from './components/navbar/navbar';
import { Route, Switch } from "react-router-dom";
import allNews from './components/news-container/all-news/allNews';
import Popup from './components/popup-mobile/popup';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={allNews} />
        <Route exact path="/coronavirus" component={allNews} />
        <Route exact path="/india" component={allNews} />
        <Route exact path="/world" component={allNews} />
        <Route exact path="/business" component={allNews} />
        <Route exact path="/science-tech" component={allNews} />
        <Route exact path="/politics" component={allNews} />
        <Route exact path="/sports" component={allNews} />
        <Route exact path="/trivia" component={allNews} />
      </Switch>
    </div>
  );
}

export default App;
