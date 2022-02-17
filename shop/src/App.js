import './App.css';
import Nav from "./layout/Nav";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Router from "./routers/Router";
import 'antd/dist/antd.css';
import "primereact/resources/themes/md-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

function App() {
  return (
      <BrowserRouter>
            <div className="App">
                <Nav />
                <hr style={{margin:"0px"}}/>
                <Router></Router>
                <Footer />
            </div>
      </BrowserRouter>
  );
}

export default App;
<>
    <script src="https://unpkg.com/primereact/primereact.all.min.js"></script>
    <script src="https://unpkg.com/primereact/image/image.min.js"></script>
    <script src="https://unpkg.com/primereact/core/core.min.js"></script>
    <script src="https://unpkg.com/primereact/dataview/dataview.min.js"></script>
    <script src="https://unpkg.com/primereact/datascroller/datascroller.min.js"></script>

</>