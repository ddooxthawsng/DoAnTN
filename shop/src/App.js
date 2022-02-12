
import './App.css';
import Nav from "./layout/Nav";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Router from "./routers/Router";
import 'antd/dist/antd.css';

function App() {
  return (
      <BrowserRouter>
            <div className="App">
                <Nav />
                <Header />
                <Router></Router>
                <Footer />
            </div>
      </BrowserRouter>
  );
}

export default App;
