import './App.css';
import Navbar from './components/navbar/navbar';
import { Route, Switch } from "react-router-dom";
import allNews from './components/news-container/all-news/allNews';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={allNews} />
      </Switch>
    </div>
  );
}

export default App;
