import './App.css';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Sns from './components/Sns';
import Yougashi from './components/Yougashi';
import Huck from './components/Huck';
import Kenkyu from './components/Kenkyu';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/blog" element={<BlogPage />}/>
          <Route path="/sns" element={<Sns />}/>
          <Route path="/kenkyu" element={<Kenkyu />}/>
          <Route path='/yougashi' element={<Yougashi />}/>
          <Route path='/huck' element={<Huck />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
