
import Nav from "./Nav";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import 'antd/dist/antd.css';
import "primereact/resources/themes/md-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

export default function PublicLayout(){
    return (
        <>
            <Nav/>
            <hr style={{margin:"0px"}}/>
            <Outlet/>
            <Footer></Footer>
        </>
    );
}

<>
    <script src="https://unpkg.com/primereact/primereact.all.min.js"></script>
    <script src="https://unpkg.com/primereact/image/image.min.js"></script>
    <script src="https://unpkg.com/primereact/core/core.min.js"></script>
    <script src="https://unpkg.com/primereact/dataview/dataview.min.js"></script>
    <script src="https://unpkg.com/primereact/datascroller/datascroller.min.js"></script>
</>
